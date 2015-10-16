var React = require('react');
var EventItem = require('./EventItem');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var assign = require('object-assign');

var emptyEventCard = {
    desc: null,
    id: null,
    name: null,
    img: null
};

var EventsFeed = React.createClass({
    getDefaultProps: function() {
        return {
            events: []
        }
    },

    getInitialState: function () {
        return {
            showModal: false,
            currentEventCard: emptyEventCard
        };
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    componentStyle: {
        placeholder: {
            maxWidth: 942,
            margin: '0 auto'
        },
        overlayPanel: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            height: 200,
            backgroundSize: 'cover',
            zIndex: 1,
            backgroundColor: '#333',
            opacity: 0.6
        },
        modalHeader: {
            backgroundImage: 'url(http://www.dannyboyjazzandblues.com/wp-content/uploads/2015/05/dixie_jazz_5.jpg)',
            backgroundSize: 'cover',
            padding: 0,
            height: 200
        },
        modalTitle: {
            position: 'absolute',
            width: '100%',
            color: 'white',
            fontSize: 28,
            textAlign: 'center',
            paddingTop: 50,
            zIndex: 2
        }
    },

    close: function() {
        this.setState({
            showModal: false,
            currentEventCard: emptyEventCard
        });
    },

    open: function(id) {
        var currentEventCard = null;

        for (var i = 0; i < this.props.events.length; i++) {
            if(id == this.props.events[i].id) {
                currentEventCard = this.props.events[i];
            }
        }

        this.setState({
            showModal: true,
            currentEventCard: currentEventCard
        });

    },

    render: function() {
        var events = this.props.events;

        var st = assign({}, this.componentStyle.modalHeader, {backgroundImage: 'url(\'' + this.state.currentEventCard.img + '\')'});

        return (
            <div>
                <div className="ui stackable three column  grid " style={this.componentStyle.placeholder}>

                    {events.map(function(e, i) {

                        return (
                             <div className=" center aligned column">
                                 <EventItem id={e.id} name={e.name} desc={e.desc} img={e.img} showEventModal={this.open} />
                             </div>
                        )
                    }, this)}

                </div>

                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Header style={st}>
                        <div style={this.componentStyle.overlayPanel} ></div>

                        <Modal.Title style={this.componentStyle.modalTitle}>
                            {this.state.currentEventCard['name']}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h4>Description</h4>
                        <div dangerouslySetInnerHTML={{__html: this.state.currentEventCard['desc']}} />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </div>

        );
    }
});

module.exports = EventsFeed;