"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wind_1 = require("./wind");
const api_error_1 = require("./api-error");
const logger_module_1 = require("./logger.module");
function parseToError(rawData) {
    logger_module_1.info("parseToError: checking data for error " + rawData);
    try {
        const object = JSON.parse(rawData);
        const hasError = object.cod !== "200";
        if (!hasError) {
            return null;
        }
        return new api_error_1.ApiError(object.cod);
    }
    catch (exception) {
        logger_module_1.info("parseToError: no error was found");
        return null;
    }
}
exports.parseToError = parseToError;
function parseToForecast(rawData) {
    logger_module_1.info("parseToForecast: parsing " + rawData + " to forecast");
    try {
        const object = JSON.parse(rawData);
        const count = object.cnt;
        if (!count) {
            return null;
        }
        const result = new Array();
        for (const windObject of object.list) {
            const speedMs = windObject.wind.speed;
            const degree = windObject.wind.deg;
            const timeUnix = windObject.dt;
            const timeHuman = windObject.dt_txt;
            result.push(new wind_1.Wind(speedMs, degree, timeUnix, timeHuman));
        }
        return result;
    }
    catch (exception) {
        logger_module_1.error("parseToForecast: parsing failed with " + exception);
        return null;
    }
}
exports.parseToForecast = parseToForecast;
//# sourceMappingURL=parser.module.js.map