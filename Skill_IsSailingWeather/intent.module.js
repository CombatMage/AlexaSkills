"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api = require("./api.module");
const Parser = require("./parser.module");
const Sailing = require("./is-sailing.module");
const Speak = require("./speak.module");
const logger_module_1 = require("./logger.module");
function handleIntentLaunch(onFinished) {
    logger_module_1.info("handleIntentLaunch");
    onFinished(Speak.getLaunchMessage());
}
exports.handleIntentLaunch = handleIntentLaunch;
function handleIntentIsSailingWeather(location, onFinished) {
    logger_module_1.info("handleIntentIsSailingWeather: location is " + location);
    Api.getCurrentForecast(location, (result) => {
        const apiError = Parser.parseToError(result);
        if (apiError) {
            logger_module_1.error("handleIntentIsSailingWeather: received error from api: " + apiError.toString());
            return handleApiError(location, apiError, onFinished);
        }
        const forecast = Parser.parseToForecast(result);
        if (!forecast || forecast.length === 0) {
            logger_module_1.error("handleIntentIsSailingWeather: no forecast was received from api");
            return handleError(onFinished);
        }
        const wind = Sailing.getWindFromForecast(forecast, Date.now());
        if (!wind) {
            logger_module_1.error("handleIntentIsSailingWeather: no data was received from forecast");
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
    logger_module_1.info("handleApiError: error is " + error.toString());
    if (error.isCityUnkown) {
        onResult(Speak.getErrorForCityUnkown(location));
    }
    else {
        onResult(Speak.TELL_ERROR_UNKOWN);
    }
}
function handleError(onResult) {
    logger_module_1.info("handleError");
    onResult(Speak.TELL_ERROR_UNKOWN);
}
//# sourceMappingURL=intent.module.js.map