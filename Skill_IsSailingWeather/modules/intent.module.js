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
        const apiError = Parser.parseToError(res);
        const forecast = Parser.parseToForecast(res);
        // TODO these values should be provided by the user
        const now = new Date();
        const date = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay();
        const time = now.getHours() + ":" + now.getMinutes;
        if (apiError) {
            return Speak.getErrorApi(apiError, location);
        }
        else {
            const requestedWindData = Sailing.getWindFromForecast(forecast, date, time);
            if (!requestedWindData) {
                logger_module_1.error("handleIntentIsSailingWeather: no suitable data was found");
                return Speak.getErrorGeneric();
            }
            else {
                return Speak.getResultForWind(requestedWindData, location, date, time);
            }
        }
    }).catch((error) => {
        return Speak.getErrorGeneric();
    });
}
exports.handleIntentIsSailingWeather = handleIntentIsSailingWeather;
//# sourceMappingURL=intent.module.js.map