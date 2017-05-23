var Alexa = require('alexa-sdk');
var Out = require('./Logger');

Out.logginEnabled = true;

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    //alexa.appId = 'amzn1.ask.skill.e0356906-3ba9-48c0-9402-a18fdfbc2819';

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        Out.log('LaunchRequest');

        this.emit(':tell', 'TODO');
    },
    'CustomIntent': function () {
        Out.log('CustomIntent');
        this.emit(':tell', 'TODO');
    }
};
