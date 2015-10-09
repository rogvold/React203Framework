/**
 * Created by sabir on 09.10.15.
 */

var Parse = require('parse').Parse;
var constants = require('../constants/Constants');
var $ = require('jquery');

var ParseMixin = {
    initParse: function(){
        var appId = constants.PARSE_APP_ID;
        var jsKey = constants.PARSE_JS_KEY;
        console.log('initParse: ', appId, jsKey);
        Parse.initialize(appId, jsKey);
    },

    loadClassItem: function(classNameOrParseClass, objectId, callback, errorCallback){
        this.initParse();
        if ((typeof classNameOrParseClass) == 'string'){
            this.loadClassItemById(classNameOrParseClass, objectId, callback, errorCallback);
        }else{
            this.loadClassItemByParseClass(classNameOrParseClass, objectId, callback, errorCallback);
        }
    },

    loadClassItemById: function(className, objectId, callback, errorCallback){
        var parseClass = Parse.Object.extend(className);
        this.loadClassItemByParseClass(parseClass, objectId, callback, errorCallback);
    },

    loadClassItemByParseClass: function(parseClass, objectId, callback, errorCallback){
        var q = new Parse.Query(parseClass);
        q.get(objectId, {
            success: function(o){
                callback(o);
            },
            error: function(){
                if (errorCallback != undefined){
                    errorCallback();
                }
            }
        });
    },

    uploadFileOnParse: function(file, callback){
        this.initParse();
        console.log('uploadFileOnParse occured: file = ', file);
        var name = Math.floor(1000 * Math.random()) + '_' + (new Date()).getTime();
        var serverUrl = 'https://api.parse.com/1/files/' + name;
        $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("X-Parse-Application-Id", constants.PARSE_APP_ID);
                request.setRequestHeader("X-Parse-REST-API-Key", constants.PARSE_REST_API_KEY);
                request.setRequestHeader("Content-Type", file.type);
            },
            url: serverUrl,
            data: file,
            processData: false,
            contentType: false,
            success: function(data) {
                callback(data.url);
            },
            error: function(data) {
                console.log('error while uploading file: ', data);
                //var obj = $.parseJSON(data);
                //alert(obj.error);
            }
        });
    },

    createParseObject: function(className, fields, callback){
        this.initParse();
        var A = Parse.Object.extend(className);
        var a = new A();
        for (var i in fields){
            var f = fields[i];
            a.set(f.name, f.val);
        }
        a.save().then(function(obj){
            callback(obj);
        });
    },

    updateParseObject: function(parseObject, fields, callback){
        this.initParse();
        if (parseObject == undefined){
            return;
        }
        var a = parseObject;
        for (var i in fields){
            var f = fields[i];
            a.set(f.name, f.val);
        }
        a.save().then(function(obj){
            callback(obj);
        });
    }


}


module.exports = ParseMixin;