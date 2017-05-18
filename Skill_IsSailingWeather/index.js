var Alexa = require('alexa-sdk');

var Out = require('./Logger');
var IntentHandler = require('./IntentModule');

let city = 'Erkner,de';

Out.logginEnabled = true;

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.ask.skill.e0356906-3ba9-48c0-9402-a18fdfbc2819';
    // alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('MyIntent');
    },
    'IsSailingWeatherIntent': function () {
        IntentHandler.handleIntentIsSailingWeather(
            city,
            (result) => {
                Out.log('onResult', [result]);
                this.emit(':tell', result);
            }
        );
    }
};
