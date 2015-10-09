/**
 * Created by sabir on 09.10.15.
 */


var React = require('react');
var ParseMixin = require('./ParseMixin');
var Parse = require('parse').Parse;

var LoginMixin = {

    logIn: function(email, password, callback, errorCallback){
        ParseMixin.initParse();
        if (this.validateEmail(email) == false){
            errorCallback('Неправильно введен Email');
            return;
        }
        Parse.User.logIn(email, password, {
            success: function(u){
                callback(u);
            },
            error: function(u, err){
                console.log(err);
                var code = err.code;
                if (code == 101){
                    errorCallback('Нет аккаунта с таким логином и паролем.');
                }else{
                    errorCallback(err.message);
                }

            }
        });
    },

    signUp: function(email, password, firstName, lastName, userRole, avatar, callback, errorCallback){
        if (avatar == undefined){
            avatar = 'http://beta.englishpatient.org/img/profile.png';
        }
        ParseMixin.initParse();
        if (this.validateEmail(email) == false){
            errorCallback('Неправильно введен Email');
            return;
        }

        if (email == undefined || password == undefined){
            errorCallback('Пустой логин или пароль');
            return;
        }
        var user = new Parse.User();
        user.set("username", email);
        user.set("password", password);
        user.set("userPassword", password);
        user.set("email", email);
        user.set('firstName', firstName);
        user.set('lastName', lastName);
        user.set('userRole', userRole);
        user.set('avatar', avatar);
        user.signUp(null, {
            success: function(u) {
                callback(u);
            },
            error: function(user, error) {
                console.log(error);
                errorCallback(error.message);
            }
        });
    },

    validateEmail: function(email){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

}

module.exports = LoginMixin;