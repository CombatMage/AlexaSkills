var Alexa = require('alexa-sdk');

var Out = require('./Logger');
var Api = require('./ApiModule');

let city = 'Erkner,de';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
    // alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('MyIntent');
    },
    'IsSailingWeatherIntent': function () {
        Api.getCurrentForecast(
            city, 
            (result) => {
                Out.log('onResult', [result]);
                this.emit(':tell', 'Success');
            },
            (error) => {
                Out.log('onError', [error]);
                this.emit(':tell', 'Failure: ' + result);
            });
    }
};
