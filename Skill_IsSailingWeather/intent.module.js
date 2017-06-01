"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser = require("./parser.module");
const Sailing = require("./is-sailing.module");
const Speak = require("./speak.module");
const api_module_1 = require("./api.module");
const logger_module_1 = require("./logger.module");
function handleIntentLaunch(onFinished) {
    logger_module_1.info("handleIntentLaunch");
    onFinished(Speak.getLaunchMessage());
}
exports.handleIntentLaunch = handleIntentLaunch;
function handleIntentIsSailingWeather(location, onFinished) {
    logger_module_1.info("handleIntentIsSailingWeather: location is " + location);
    api_module_1.getCurrentForecast(location).then((res) => {
        handleResponse(location, res, onFinished);
    }).catch((error) => {
        handleError(onFinished);
    });
}
exports.handleIntentIsSailingWeather = handleIntentIsSailingWeather;
function handleResponse(requestedLocation, response, onFinished) {
    const apiError = Parser.parseToError(response);
    if (apiError) {
        logger_module_1.error("handleIntentIsSailingWeather: received error from api: " + apiError.toString());
        handleApiError(requestedLocation, apiError, onFinished);
    }
    else {
        const forecast = Parser.parseToForecast(requestedLocation);
        if (!forecast || forecast.length === 0) {
            logger_module_1.error("handleIntentIsSailingWeather: no forecast was received from api");
            handleError(onFinished);
        }
        else {
            const wind = Sailing.getWindFromForecast(forecast, Date.now());
            if (!wind) {
                logger_module_1.error("handleIntentIsSailingWeather: no data was received from forecast");
                handleError(onFinished);
            }
            else {
                const responseStrength = Speak.getPositiveResponseForWindSpeed(wind.speedBft, requestedLocation);
                const responseDir = Speak.getPositiveResponseForWindDirection(wind.windDirection);
                onFinished(`${responseStrength} ${responseDir}`);
            }
        }
    }
}
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