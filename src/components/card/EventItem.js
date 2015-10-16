
var React = require('react');
var assign = require('object-assign');

var EventItem = React.createClass({
    getDefaultProps: function() {
        return {
            desc : "Jazz Musicians!   Jam with instrumentalists, singers and composers in Astoria, Queens.  Trade licks, jam on standards and share original compositions.  We're all about meeting fellow musicians, working on our craft and making new connections and friendships. Over time the group has evolved into a weekly jam session (for the most part). We've kept things going for a long time now. If you're interested in attending, please read the FAQ, which has a lot of information and accumulated \"what works\" things that we've learned from running all these sessions.",
            id: "defaultId",
            name: "Astoria Jazz Hang",
            img: "http://www.dannyboyjazzandblues.com/wp-content/uploads/2015/05/dixie_jazz_5.jpg",

            showEventModal: function() {}
        }
    },

    getInitialState: function () {
        return {}
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    componentWillUnmount: function() {
        console.log('unmounting: ', this.props);
    },


    componentStyle: {
        placeholder: {
            cursor: "pointer",
            minHeight: 160,
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        },

        overlayPanel: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
            backgroundColor: '#333',
            opacity: 0.6,
            borderRadius: '5px'
        },

        panel: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            padding: 5,
            zIndex: 2,
            color: 'white'
        },

        editablePanel: {
            zIndex: 3,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            cursor: 'pointer'
        },

        information: {
            width: '90%',
            position: 'absolute',
            bottom: 10,
            left: 10
        },

        header: {
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'left'
        },

        description: {
            fontSize: '13px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '100%',
            opacity: 0.8,
            whiteSpace: 'nowrap',
            textAlign: 'left'
        }

    },

    onItemClick: function() {
        this.props.showEventModal(this.props.id);
    },

    render: function() {

        var st = assign({}, this.componentStyle.placeholder, {backgroundImage: 'url(\'' + this.props.img + '\')'});

        return (
            <div style={st} className={'ui card'} onClick={this.onItemClick} >
                <div></div>
                <div className={'exerciseCardOverlay'} style={this.componentStyle.overlayPanel} ></div>

                <div style={this.componentStyle.panel} >
                    <div style={this.componentStyle.information}>
                        <div style={this.componentStyle.header}>
                            {this.props.name}
                        </div>
                        <div style={this.componentStyle.description}>
                            {this.props.desc}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});

module.exports = EventItem;