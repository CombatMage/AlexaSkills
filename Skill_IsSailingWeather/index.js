var Alexa = require('alexa-sdk');

var Out = require('./Logger');
var SpeakHandler = require('./SpeakModule');
var IntentHandler = require('./IntentModule');

var tbNameLocation = 'tbNameLocation'


Out.logginEnabled = true;

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.appId = 'amzn1.ask.skill.e0356906-3ba9-48c0-9402-a18fdfbc2819';
    alexa.dynamoDBTableName = tbNameLocation;

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        Out.log('LaunchRequest');

        IntentHandler.handleIntentLaunch(
            (result) => {
                this.emit(':tell', result);
            }
        );
    },
    'IsSailingWeatherIntent': function () {
        Out.log('IsSailingWeatherIntent');

        // check if slot for location is set
        var location = undefined;
        try {
            location = this.event.request.intent.slots.location.value;
        }
        catch (error) {
            Out.log('IsSailingWeatherIntent', [], 'no slot for location given');
        }

        // check if user has set his favourite location before
        if (!location) {
            location = this.attributes[tbNameLocation];
        }

        // else ask the user for his location
        if (!location) {
            Out.log('IsSailingWeatherIntent', [], 'no location was given, ask the user');
            this.emit(':ask', SpeakHandler.getRequestForLocation(), SpeakHandler.getRepeatMessage());
        }
        else {
            Out.log('IsSailingWeatherIntent', [location], 'get data from OpenWeatherMap');
            IntentHandler.handleIntentIsSailingWeather(
                location,
                (result) => {
                    Out.log('onResult', [result], 'finished: IsSailingWeatherIntent');
                    this.emit(':tell', result);
                }
            );
        }
    },
    'SetLocationIntent': function() {
        Out.log('SetLocationIntent');

        // check if slot for location is set
        var location = undefined;
        try {
            location = this.event.request.intent.slots.location.value;
        }
        catch (error) {
            Out.log('SetLocationIntent', [], 'no slot for location given');
        }

        if (!location) {
            this.emit(':tell', SpeakHandler.getRepeatMessage());
        }
        else {
            Out.log('SetLocationIntent', [location], 'get data from OpenWeatherMap');
            this.attributes[tbNameLocation] = location;
            IntentHandler.handleIntentIsSailingWeather(
                location,
                (result) => {
                    Out.log('onResult', [result], 'finished: SetLocationIntent');
                    this.emit(':tell', result);
                }
            );
        }
    }
};
