/**
 * Created by sabir on 10.10.15.
 */
var React = require('react');

var DialogOverlay = React.createClass({
    getDefaultProps: function () {
        return {
            visible: false,
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

    componentStyle: {
        placeholder: {
            //width: '100vw',
            //height: '100vh',
            //position: 'fixed',
            //zIndex: '100',
            //top: 0,
            //bottom: 0,
            //left: 0,
            //right: 0
        },



        transparentLayer: {
            backgroundColor: '#676D76',
            opacity: 0.8,
            position: 'fixed',
            zIndex: '101',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        },

        block: {
            position: 'fixed',
            zIndex: '102',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        }
    },

    render: function () {

        return (
            <div style={this.componentStyle.placeholder}>

                {this.props.visible == false ? null :
                    <div>
                        <div style={this.componentStyle.transparentLayer} ></div>

                        <div style={this.componentStyle.block} >
                            {this.props.content}
                        </div>
                    </div>
                }

            </div>
        );
    }

});
module.exports = DialogOverlay;