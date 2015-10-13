/**
 * Created by sabir on 10.10.15.
 */
var React = require('react');
var assign = require('object-assign');

var DialogOverlay = require('./DialogOverlay');
var DialogPanel = require('./DialogPanel');

var Dialog = React.createClass({
    getDefaultProps: function () {
        return {
            visible: false,
            content: undefined,
            header: undefined,
            footer: undefined,
            headerText: undefined,
            onClose: function(){
                console.log('onClose occured');
            },
            dialogPanelStyle: {

            }
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
        placeholder: {}
    },

    onClose: function(){
        this.props.onClose();
    },

    getContent: function(){
        return (
            <DialogPanel style={this.props.dialogPanelStyle} headerText={this.props.headerText} content={this.props.content}
                         footer={this.props.footer} header={this.props.header} onClose={this.onClose} />
        );
    },

    render: function () {
        var content = this.getContent();
        console.log('rendering dialog content = ', content);
        return (
            <div style={this.componentStyle.placeholder}>
                <DialogOverlay  visible={this.props.visible} content={content} />
            </div>
        );
    }

});


module.exports = Dialog;