"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const Api = require("./ApiModule");
const Parser = require("./ParserModule");
const Sailing = require("./IsSailingModule");
const Speak = require("./SpeakModule");
function handleIntentLaunch(onFinished) {
    winston_1.info("handleIntentLaunch");
    onFinished(Speak.getLaunchMessage());
}
exports.handleIntentLaunch = handleIntentLaunch;
function handleIntentIsSailingWeather(location, onFinished) {
    winston_1.info("handleIntentIsSailingWeather: location is " + location);
    Api.getCurrentForecast(location, (result) => {
        const apiError = Parser.parseToError(result);
        if (apiError) {
            winston_1.error("handleIntentIsSailingWeather: received error from api: " + apiError.toString());
            return handleApiError(location, apiError, onFinished);
        }
        const forecast = Parser.parseToForecast(result);
        if (!forecast || forecast.length === 0) {
            winston_1.error("handleIntentIsSailingWeather: no forecast was received from api");
            return handleError(onFinished);
        }
        const wind = Sailing.getWindFromForecast(forecast, Date.now());
        if (!wind) {
            winston_1.error("handleIntentIsSailingWeather: no data was received from forecast");
            return handleError(onFinished);
        }
        const responseStrength = Speak.getPositiveResponseForWindSpeed(wind.speedBft, location);
        const responseDir = Speak.getPositiveResponseForWindDirection(wind.windDirection);
        onFinished(`${responseStrength} ${responseDir}`);
    }, (error) => {
        return handleError(onFinished);
    });
}
exports.handleIntentIsSailingWeather = handleIntentIsSailingWeather;
function handleApiError(location, error, onResult) {
    winston_1.info("handleApiError: error is " + error.toString());
    if (error.isCityUnkown) {
        onResult(Speak.getErrorForCityUnkown(location));
    }
    else {
        onResult(Speak.TELL_ERROR_UNKOWN);
    }
}
function handleError(onResult) {
    winston_1.info("handleError");
    onResult(Speak.TELL_ERROR_UNKOWN);
}
//# sourceMappingURL=IntentModule.js.map