/**
 * Created by sabir on 09.10.15.
 */
var React = require('react');

var AuthButton = require('../components/user/login/AuthButton');

var Header = require('../components/header/Header');

var EventItem = require('../components/card/EventItem');

var EventsFeed = require('../components/card/EventsFeed');

var IvanData = require('../data/IvanData.json');

var SelfInitHeader = require('../components/headers/SelfInitHeader');


var DialogClickableArea = require('../components/dialog/DialogClickableArea');



var App = React.createClass({
    getDefaultProps: function () {
        return {
            name: "Jazz events",
            desc: "Here you can find recent jazz concerts and events near you",
            img: './assets/img/ButmanTiny.jpg'
        }
    },

    getInitialState: function () {
        return {
            events: []
        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {
        this.setState({
            events: IvanData
        });
    },

    componentStyle: {
        placeholder: {
            padding: '10px'
        }
    },

    clear: function(){
        this.setState({
            users: []
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
<<<<<<< HEAD
=======
        var users = SabirData.USERS_LIST;

        var dialogContent = this.getDialogContent();

>>>>>>> c1a7739bb36eaa4b7c33ae4dba0ed3a4741e70af
        return (
            <div>
                <Header name={this.props.name} desc={this.props.desc} img={this.props.img}></Header>

                <div style={this.componentStyle.placeholder}>
                    <EventsFeed events={this.state.events} />
                </div>
<<<<<<< HEAD
=======


                <div>
                    <UsersList onItemClick={this.onItemClick} users={this.state.users} />
                </div>

                <div>
                 this is dialog example
                    <DialogClickableArea content={dialogContent} >
                        click me!
                    </DialogClickableArea>

                </div>

>>>>>>> c1a7739bb36eaa4b7c33ae4dba0ed3a4741e70af
            </div>
        );
    }

});

React.render(
    <App />,
    document.getElementById('main')
);

