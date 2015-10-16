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

    render: function () {
        return (
            <div>
                <Header name={this.props.name} desc={this.props.desc} img={this.props.img}></Header>

                <div style={this.componentStyle.placeholder}>
                    <EventsFeed events={this.state.events} />
                </div>
            </div>
        );
    }

});

React.render(
    <App />,
    document.getElementById('main')
);

