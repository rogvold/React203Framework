/**
 * Created by sabir on 16.10.15.
 */
/**
 * Created by sabir on 09.10.15.
 */
var React = require('react');

var AuthButton = require('../components/user/login/AuthButton');

var UserItem = require('../components/list/user/UserItem');

var UsersList = require('../components/list/user/UsersList');

var SabirData = require('../data/SabirData');

var DialogClickableArea = require('../components/dialog/DialogClickableArea');

var SelfInitHeader = require('../components/headers/SelfInitHeader');


var App = React.createClass({
    getDefaultProps: function () {
        return {
        }
    },

    getInitialState: function () {
        return {
            users: []
        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {
        this.setState({
            users: SabirData.USERS_LIST
        });
    },

    componentStyle: {
        placeholder: {
            padding: '10px'
        }
    },


    getModifiedList: function(name){
        var list = this.state.users;
        for (var i in list){
            list[i].name = name;
        }
        return list;
    },

    onItemClick: function(index, name){
        var newList = this.getModifiedList(name);
        this.setState({
            users: newList
        });
    },

    getDialogContent: function(){
        return (
            <div>

                Hello, Dialog!
            </div>

        );
    },

    render: function () {
        var users = SabirData.USERS_LIST;

        var dialogContent = this.getDialogContent();

        return (
            <div style={this.componentStyle.placeholder}>
                <SelfInitHeader logo={'http://beta.englishpatient.org/img/tsu_logo.png'} logoText={'Jazz Locate'}  />

            </div>
        );
    }

});

React.render(
    <App />,
    document.getElementById('main')
);

