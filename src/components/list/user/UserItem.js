/**
 * Created by sabir on 09.10.15.
 */
var React = require('react');

var UserItem = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'NoName',
            comment: 'NoComment',
            avatar: 'http://searchlightoffashion.com/templates/Shab/dleimages/noavatar.png',
            commentColor: 'black',
            onItemSuperPuperClick: function(name){
                console.log(name);
                alert(name);
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
        placeholder: {
            borderBottom: '1px solid lightgrey',
            height: '50px',
            width: '100%',
            cursor: 'pointer'
        },

        avatarPlaceholder: {
            display: 'inline-block',
            height: '100%'
        },

        avatar: {
            height: '100%'
        },

        comment: {
            fontSize: '11px',
            lineHeight: '11px'
        },

        name: {
            fontWeight: 'bold',
            fontSize: '14px'
        },

        userInfoPlaceholder: {
            display: 'inline-block',
            marginLeft: '5px',
            verticalAlign: 'top',
            maxWidth: '100px'
        }


    },

    onItemClick: function(){
        this.props.onItemSuperPuperClick(this.props.name);
    },

    render: function () {

        return (
            <div style={this.componentStyle.placeholder} onClick={this.onItemClick} >

                <div style={this.componentStyle.avatarPlaceholder}>
                    <img style={this.componentStyle.avatar} src={this.props.avatar} />
                </div>

                <div style={this.componentStyle.userInfoPlaceholder}>

                    <div style={this.componentStyle.name}>
                        {this.props.name}
                    </div>

                    <div style={this.componentStyle.comment}>
                        {this.props.comment}
                    </div>

                </div>

            </div>
        );
    }

});

module.exports = UserItem;