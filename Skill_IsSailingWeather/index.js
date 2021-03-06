"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alexa = require("alexa-sdk");
const SpeakHandler = require("./modules/speak.module");
const IntentHandler = require("./modules/intent.module");
const logger_module_1 = require("./modules/logger.module");
const tbNameLocation = "tbNameLocation";
function launchRequestHandler() {
    logger_module_1.info("launchRequestHandler");
    IntentHandler.handleIntentLaunch((result) => {
        logger_module_1.info("on launchRequestHandler finished with " + result);
        this.emit(":ask", result, SpeakHandler.getRepeatMessage());
    });
}
function helpIntentHandler() {
    logger_module_1.info("helpIntentHandler");
    this.emit(":ask", SpeakHandler.getResponseForHelp());
}
function stopIntentHandler() {
    logger_module_1.info("stopIntentHandler");
    this.emit(":tell");
}
function cancelIntentHandler() {
    logger_module_1.info("cancelIntentHandler");
    this.emit(":tell");
}
function isSailingWeatherIntentHandler() {
    logger_module_1.info("isSailingWeatherIntentHandler");
    // check if slot for location is set
    let location;
    try {
        location = this.event.request.intent.slots.location.value;
    }
    catch (error) {
        logger_module_1.info("isSailingWeatherIntentHandler: no slot for location given");
    }
    // check if user has set his favourite location before
    if (!location) {
        location = this.attributes[tbNameLocation];
    }
    // else ask the user for his location
    if (!location) {
        logger_module_1.error("isSailingWeatherIntentHandler: no favourite location was set");
        this.emit(":ask", SpeakHandler.getRequestForLocation(), SpeakHandler.getRepeatMessage());
    }
    else {
        logger_module_1.info("isSailingWeatherIntentHandler: getting weather information for " + location);
        IntentHandler.handleIntentIsSailingWeather(location)
            .then((res) => {
            logger_module_1.info("isSailingWeatherIntentHandler finished with " + res);
            this.emit(res.type, res.message);
        });
    }
}
function setLocationIntentHandler() {
    logger_module_1.info("setLocationIntentHandler");
    // check if slot for location is set
    let location;
    try {
        location = this.event.request.intent.slots.location.value;
    }
    catch (error) {
        error("setLocationIntentHandler: slot for location was set");
    }
    // else ask the user for his location
    if (!location) {
        this.emit(":ask", SpeakHandler.getRepeatMessage());
    }
    else {
        logger_module_1.info("setLocationIntentHandler: write " + location + " to database");
        this.attributes[tbNameLocation] = location;
        logger_module_1.info("setLocationIntentHandler: getting weather information for " + location);
        IntentHandler.handleIntentIsSailingWeather(location)
            .then((res) => {
            logger_module_1.info("setLocationIntentHandler finished with " + res);
            this.emit(res.type, res.message);
        });
    }
}
const handlers = {
    "LaunchRequest": launchRequestHandler,
    "AMAZON.HelpIntent": helpIntentHandler,
    "AMAZON.StopIntent": stopIntentHandler,
    "AMAZON.CancelIntent": cancelIntentHandler,
    "IsSailingWeatherIntent": isSailingWeatherIntentHandler,
    "SetLocationIntent": setLocationIntentHandler,
};
exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.ask.skill.e0356906-3ba9-48c0-9402-a18fdfbc2819";
    alexa.dynamoDBTableName = tbNameLocation;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
//# sourceMappingURL=index.js.map