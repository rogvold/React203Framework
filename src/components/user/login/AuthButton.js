/**
 * Created by sabir on 02.10.15.
 */
var React = require('react');
var AuthOverlay = require('./AuthOverlay');

var AuthButton = React.createClass({
    getDefaultProps: function () {
        return {
            iconClassName: 'ui sign in icon',
            buttonClassName: 'ui inverted button',
            buttonText: 'Log in',
            onLogin: function(){
                window.location.href = window.location.href;
            }
        }
    },

    getInitialState: function () {
        return {
            overlayIsVisible: false
        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    componentStyle: {
        placeholder: {
            display: 'inline-block',
        },
        buttonPlaceholder: {
            display: 'inline-block',
            cursor: 'pointer'
        }
    },

    onOverlayClose: function(){
        this.setState({
            overlayIsVisible: false
        });
    },

    onClick: function(){
        this.setState({
            overlayIsVisible: true
        });
    },

    render: function () {

        return (
            <div style={this.componentStyle.placeholder} >
                <div className={this.props.buttonClassName} style={this.componentStyle.buttonPlaceholder} onClick={this.onClick}>
                    <i className={this.props.iconClassName} ></i> {this.props.buttonText}
                </div>
                <AuthOverlay onLogin={this.props.onLogin} isVisible={this.state.overlayIsVisible} onClose={this.onOverlayClose} />
            </div>
        );
    }

});

module.exports = AuthButton;