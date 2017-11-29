import * as Alexa from "alexa-sdk";

import * as SpeakHandler from "./modules/speak.module";
import * as IntentHandler from "./modules/intent.module";

import { info, error } from "./modules/logger.module";

const tbNameLocation = "tbNameLocation";

function launchRequestHandler() {
    info("launchRequestHandler");
    IntentHandler.handleIntentLaunch(
        (result) => {
            info("on launchRequestHandler finished with " + result);
            this.emit(":ask", result, SpeakHandler.getRepeatMessage());
        },
    );
}

function helpIntentHandler() {
    info("helpIntentHandler");
    this.emit(":ask", SpeakHandler.getResponseForHelp());
}

function stopIntentHandler() {
    info("stopIntentHandler");
    this.emit(":tell");
}

function cancelIntentHandler() {
    info("cancelIntentHandler");
    this.emit(":tell");
}

function isSailingWeatherIntentHandler() {
    info("isSailingWeatherIntentHandler");
    // check if slot for location is set
    let location: string;
    try {
        location = this.event.request.intent.slots.location.value;
    } catch (error) {
        info("isSailingWeatherIntentHandler: no slot for location given");
    }
    // check if user has set his favourite location before
    if (!location) {
        location = this.attributes[tbNameLocation];
    }
    // else ask the user for his location
    if (!location) {
        error("isSailingWeatherIntentHandler: no favourite location was set");
        this.emit(":ask", SpeakHandler.getRequestForLocation(), SpeakHandler.getRepeatMessage());
    } else {
        info("isSailingWeatherIntentHandler: getting weather information for " + location);
        IntentHandler.handleIntentIsSailingWeather(location)
            .then((res) => {
                info("isSailingWeatherIntentHandler finished with " + res);
                this.emit(res.type, res.message);
            });
    }
}

function setLocationIntentHandler() {
    info("setLocationIntentHandler");
    // check if slot for location is set
    let location: string;
    try {
        location = this.event.request.intent.slots.location.value;
    } catch (error) {
        error("setLocationIntentHandler: slot for location was set");
    }

    // else ask the user for his location
    if (!location) {
        this.emit(":ask", SpeakHandler.getRepeatMessage());
    } else {
        info("setLocationIntentHandler: write " + location + " to database");
        this.attributes[tbNameLocation] = location;
        info("setLocationIntentHandler: getting weather information for " + location);
        IntentHandler.handleIntentIsSailingWeather(location)
            .then((res) => {
                info("setLocationIntentHandler finished with " + res);
                this.emit(res.type, res.message);
            });
    }
}

const handlers: Alexa.Handlers = {
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
