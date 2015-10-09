/**
 * Created by sabir on 09.10.15.
 */

var React = require('react');
var UserItem = require('./UserItem');

var UsersList = React.createClass({
    getDefaultProps: function () {
        return {
            users: [],
            onItemClick: function(index, name){
                alert(index);
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
            width: '190px',
            borderLeft: '1px solid lightgrey',
            borderRight: '1px solid lightgrey'
        }
    },

    onItemClick: function(index, name){
        console.log(index, name);
        this.props.onItemClick(index, name);
    },

    render: function () {
        var list = this.props.users;

        return (
            <div style={this.componentStyle.placeholder}>
                {list.map(function(u, i){
                    var name = u.name;
                    var comment = u.comment;
                    var avatar = u.avatar;
                    var key = 'user-item-' + i;
                    var boundClick = this.onItemClick.bind(this, i);
                    return (
                        <UserItem onItemSuperPuperClick={boundClick} key={key} name={name} comment={comment} avatar={avatar} />
                    );
                }, this)}
            </div>
        );
    }

});

module.exports = UsersList;