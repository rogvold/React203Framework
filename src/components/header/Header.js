var React = require('react');
var assign = require('object-assign');

var Header = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'defaultName',
            desc: 'defaultDescription',
            img: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Jas_Messengers01.JPG',
            content: undefined
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
            width: '100%',
            height: 500,
            backgroundSize: 'cover'
        },

        NameDesc: {
            color: 'white',
            width: '100%',
            top: 250,
            position: 'absolute',
            zIndex: 2
        },

        overlayPanel: {
            position: 'absolute',
            height: 500,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
            backgroundColor: '#333',
            opacity: 0.5
        },

        topPlaceholder: {
            width: 942,
            margin: '0 auto'
        }

    },

    render: function() {
        var st = assign({}, this.componentStyle.placeholder, {backgroundImage: 'url(\'' + this.props.img + '\')'});

        return (
            <div style={st}>
                <div style={this.componentStyle.overlayPanel}></div>

                <div style={this.componentStyle.NameDesc}>

                    <div style={this.componentStyle.topPlaceholder} >
                        <div style={{fontSize: 50}}>{this.props.name}</div>

                        <div style={{fontSize: 25}}>{this.props.desc}</div>

                        {this.props.content == undefined ? null :
                            <div>{this.props.content}</div>
                        }
                    </div>



                </div>

            </div>
        );
    }
});

module.exports = Header;