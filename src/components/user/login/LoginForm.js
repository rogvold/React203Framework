/**
 * Created by sabir on 02.10.15.
 */
var React = require('react');
var LoginMixin = require('../../../mixins/LoginMixin');

var LoginForm = React.createClass({
    getDefaultProps: function () {
        return {
            buttonText: 'Войти',
            emailPlaceholder: 'Email',
            passwordPlaceholder: 'Пароль',
            formName: 'Вход',
            onLogin: function(u){
                console.log('onLogin occured: u = ', u);
            }
        }
    },

    getInitialState: function () {
        return {
            email: '',
            password: '',
            messageIsVisible: false,
            errorMessage: undefined,
            loading: false
        }
    },

    componentWillReceiveProps: function (nextProps) {

    },

    componentDidMount: function () {

    },

    componentStyle: {
        placeholder: {
            padding: 5,
            width: 250,
            margin: '0 auto'
        },

        namePlaceholder: {
            fontSize: '20px',
            textAlign: 'center',
            paddingBottom: 10
        },

        inputsPlaceholder: {
            width: '100%'
        },

        emailPlaceholder: {
            marginBottom: 10
        },


        passwordPlaceholder: {
            marginBottom: 10
        },

        buttonPlaceholder: {
            //textAlign: 'right'
            textAlign: 'center'
        },

        errorPlaceholder: {
            color: 'firebrick',
            borderRadius: 5,
            padding: 5,
            marginBottom: 10,
            textAlign: 'center',
            border: '1px dotted firebrick',
            fontSize: '14px',
            backgroundColor: 'lemonchiffon'
        },

        button: {
            marginTop: 5
        }
    },

    onEmailChange: function(evt){
        var val = evt.target.value;
        this.setState({
            email: val
        });
    },

    onPasswordChange: function(evt){
        var val = evt.target.value;
        this.setState({
            password: val
        });
    },

    logIn: function(){
        var email = this.state.email;
        var password = this.state.password;
        this.setState({
            loading: true
        });
        LoginMixin.logIn(email, password, function(u){
            this.props.onLogin(u);
            this.setState({
                loading: false
            });
        }.bind(this), function(errorMessage){
            this.setState({
                errorMessage: errorMessage,
                loading: false
            });
        }.bind(this));
    },

    onClick: function(){
        this.logIn();
    },

    render: function () {
        var errorMessage = this.state.errorMessage;

        return (
            <div style={this.componentStyle.placeholder}>

                <div style={this.componentStyle.namePlaceholder} >
                    {this.props.formName}
                </div>

                <div style={this.componentStyle.inputsPlaceholder} className={'ui form'}>
                    <div style={this.componentStyle.emailPlaceholder} className={'field'}>
                        <input type="text" placeholder={this.props.emailPlaceholder} onChange={this.onEmailChange} autofocus={'1'} value={this.state.email} />
                    </div>
                    <div style={this.componentStyle.passwordPlaceholder}>
                        <input type={'password'} placeholder={this.props.passwordPlaceholder} onChange={this.onPasswordChange} value={this.state.password} />
                    </div>
                </div>

                {errorMessage == undefined ? null :
                    <div style={this.componentStyle.errorPlaceholder}>
                        <i className={'ui icon warning sign'}></i>  {errorMessage}
                    </div>
                }

                <div style={this.componentStyle.buttonPlaceholder}>
                    <div className={'ui primary button ' + (this.state.loading ? ' disabled ' : ' ')} onClick={this.onClick} >
                        <i className={'ui sign in icon'}></i>
                        {this.props.buttonText}
                    </div>
                </div>

            </div>
        );
    }

});

module.exports = LoginForm;