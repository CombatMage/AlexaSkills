"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const Wind_1 = require("./Wind");
const ApiError_1 = require("./ApiError");
function parseToError(rawData) {
    winston_1.info("parseToError: checking data for error " + rawData);
    try {
        const object = JSON.parse(rawData);
        const hasError = object.cod !== "200";
        if (!hasError) {
            return null;
        }
        return new ApiError_1.ApiError(object.cod);
    }
    catch (exception) {
        winston_1.info("parseToError: no error was found");
        return null;
    }
}
exports.parseToError = parseToError;
function parseToForecast(rawData) {
    winston_1.info("parseToForecast: parsing " + rawData + " to forecast");
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
            result.push(new Wind_1.Wind(speedMs, degree, timeUnix, timeHuman));
        }
        return result;
    }
    catch (exception) {
        winston_1.error("parseToForecast: parsing failed with " + exception);
        return null;
    }
}
exports.parseToForecast = parseToForecast;
//# sourceMappingURL=ParserModule.js.map