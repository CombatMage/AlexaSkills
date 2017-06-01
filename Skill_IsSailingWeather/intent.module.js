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
function handleIntentIsSailingWeather(location) {
    logger_module_1.info("handleIntentIsSailingWeather: location is " + location);
    return api_module_1.getCurrentForecast(location).then((res) => {
        return handleResponse(location, res);
    }).catch((error) => {
        return handleError();
    });
}
exports.handleIntentIsSailingWeather = handleIntentIsSailingWeather;
function handleResponse(requestedLocation, response) {
    const apiError = Parser.parseToError(response);
    if (apiError) {
        logger_module_1.error("handleIntentIsSailingWeather: received error from api: " + apiError.toString());
        return handleApiError(requestedLocation, apiError);
    }
    else {
        const forecast = Parser.parseToForecast(requestedLocation);
        if (!forecast || forecast.length === 0) {
            logger_module_1.error("handleIntentIsSailingWeather: no forecast was received from api");
            return handleError();
        }
        else {
            const wind = Sailing.getWindFromForecast(forecast, "");
            if (!wind) {
                logger_module_1.error("handleIntentIsSailingWeather: no data was received from forecast");
                return handleError();
            }
            else {
                const responseStrength = Speak.getPositiveResponseForWindSpeed(wind.speedBft, requestedLocation);
                const responseDir = Speak.getPositiveResponseForWindDirection(wind.windDirection);
                return `${responseStrength} ${responseDir}`;
            }
        }
    }
}
function handleApiError(location, error) {
    logger_module_1.info("handleApiError: error is " + error.toString());
    if (error.isCityUnkown) {
        return Speak.getErrorForCityUnkown(location);
    }
    else {
        return Speak.TELL_ERROR_UNKOWN;
    }
}
function handleError() {
    logger_module_1.info("handleError");
    return Speak.TELL_ERROR_UNKOWN;
}
// for testing only
handleIntentIsSailingWeather("berlin").then((res) => {
    console.log(res);
});
//# sourceMappingURL=intent.module.js.map