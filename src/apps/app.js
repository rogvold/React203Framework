/**
 * Created by sabir on 09.10.15.
 */
var React = require('react');

var AuthButton = require('../components/user/login/AuthButton');

var App = React.createClass({
    getDefaultProps: function () {
        return {}
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
            padding: '10px'
        }
    },

    render: function () {

        return (
            <div style={this.componentStyle.placeholder}>

                <div>

                    <p>
                        Это кнопка для авторизации
                        <AuthButton buttonClassName={'ui inverted violet button'} />
                    </p>

                </div>


            </div>
        );
    }

});

React.render(
    <App />,
    document.getElementById('main')
);

