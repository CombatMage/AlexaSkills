"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Out = require("./Logger");
const Api = require("./ApiModule");
const Parser = require("./ParserModule");
const Sailing = require("./IsSailingModule");
const Speak = require("./SpeakModule");
function handleIntentLaunch(onFinished) {
    onFinished(Speak.getLaunchMessage());
}
exports.handleIntentLaunch = handleIntentLaunch;
function handleIntentIsSailingWeather(location, onFinished) {
    Out.log('handleIntentIsSailingWeather', [location]);
    Api.getCurrentForecast(location, (result) => {
        let error = Parser.parseToError(result);
        if (error) {
            Out.log('handleIntentIsSailingWeather', [location], 'received error ' + String(error));
            return handleApiError(location, error, onFinished);
        }
        let forecast = Parser.parseToForecast(result);
        if (!forecast || forecast.length == 0) {
            Out.log('handleIntentIsSailingWeather', [location], 'no forecast available');
            return handleError(onFinished);
        }
        let wind = Sailing.getWindFromForecast(forecast, Date.now());
        if (!wind) {
            Out.log('handleIntentIsSailingWeather', [location], 'no wind data found');
            return handleError(onFinished);
        }
        let output = Speak.getPositiveResponseForWindSpeed(wind.speedBft, location);
        onFinished(output);
    }, (error) => {
        return handleError(onFinished);
    });
}
exports.handleIntentIsSailingWeather = handleIntentIsSailingWeather;
function handleApiError(location, error, onResult) {
    Out.log('handleApiError', [error.toString()]);
    if (error.isCityUnkown) {
        onResult(Speak.getErrorForCityUnkown(location));
    }
    else {
        onResult(Speak.TELL_ERROR_UNKOWN);
    }
}
function handleError(onResult) {
    Out.log('handleError');
    onResult(Speak.TELL_ERROR_UNKOWN);
}
//# sourceMappingURL=IntentModule.js.map