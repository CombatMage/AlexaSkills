var Alexa = require('alexa-sdk');

var Winston = require('winston');
Winston.level = 'info';
const info = Winston.info;
const error = Winston.error;

var SpeakHandler = require('./SpeakModule');
var IntentHandler = require('./IntentModule');

var tbNameLocation = 'tbNameLocation'

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.appId = 'amzn1.ask.skill.e0356906-3ba9-48c0-9402-a18fdfbc2819';
    alexa.dynamoDBTableName = tbNameLocation;

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        info('LaunchRequest');
        IntentHandler.handleIntentLaunch(
            (result) => {
                info('on LaunchRequest finished with ' + result);
                this.emit(':ask', result, SpeakHandler.getRepeatMessage());
            }
        );
    },
    'AMAZON.HelpIntent': function() {
        info('AMAZON.HelpIntent');
        this.emit(':ask', SpeakHandler.getResponseForHelp());
    },
    'AMAZON.StopIntent': function() {
        info('AMAZON.StopIntent');
        this.emit(':tell');
    },
    'AMAZON.CancelIntent': function() {
        info('AMAZON.CancelIntent');
        this.emit(':tell');
    },
    'IsSailingWeatherIntent': function () {
        info('IsSailingWeatherIntent');

        // check if slot for location is set
        var location = undefined;
        try {
            location = this.event.request.intent.slots.location.value;
        } catch (error) {
            info('IsSailingWeatherIntent: no slot for location given');
        }

        // check if user has set his favourite location before
        if (!location) {
            location = this.attributes[tbNameLocation];
        }

        // else ask the user for his location
        if (!location) {
            error('IsSailingWeatherIntent: no favourite location was set');
            this.emit(':ask', SpeakHandler.getRequestForLocation(), SpeakHandler.getRepeatMessage());
        }
        else {
            info('IsSailingWeatherIntent: getting weather information for ' + location);
            IntentHandler.handleIntentIsSailingWeather(
                location,
                (result) => {
                    info('on IsSailingWeatherIntent finished with ' + result);
                    this.emit(':tell', result);
                }
            );
        };
    },
    'SetLocationIntent': function() {
        info('on SetLocationIntent');

        // check if slot for location is set
        var location = undefined;
        try {
            location = this.event.request.intent.slots.location.value;
        } catch (error) {
            error('SetLocationIntent: slot for location was set');
        }

        // else ask the user for his location
        if (!location) {
            this.emit(':ask', SpeakHandler.getRepeatMessage());
        }
        else {
            info('SetLocationIntent: write ' + location + ' to database');
            this.attributes[tbNameLocation] = location;
            info('SetLocationIntent: getting weather information for ' + location);
            IntentHandler.handleIntentIsSailingWeather(
                location,
                (result) => {
                    info('SetLocationIntent finished with ' + result);
                    this.emit(':tell', result);
                }
            );
        }
    }
};
