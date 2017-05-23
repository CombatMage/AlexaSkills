"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Out = require("./Logger");
const Wind_1 = require("./Wind");
const ApiError_1 = require("./ApiError");
function parseToError(rawData) {
    Out.log('parseToError', [rawData]);
    try {
        let object = JSON.parse(rawData);
        let hasError = object.cod != '200';
        if (!hasError) {
            return null;
        }
        return new ApiError_1.ApiError(object.cod);
    }
    catch (exception) {
        Out.log('parseToError', [rawData], String(exception));
        return null;
    }
}
exports.parseToError = parseToError;
function parseToForecast(rawData) {
    Out.log('parseToForecast', [rawData]);
    try {
        let object = JSON.parse(rawData);
        let count = object.cnt;
        if (!count)
            return null;
        let result = new Array();
        for (let windObject of object.list) {
            let speedMs = windObject.wind.speed;
            let degree = windObject.wind.deg;
            let timeUnix = windObject.dt;
            let timeHuman = windObject.dt_txt;
            result.push(new Wind_1.Wind(speedMs, degree, timeUnix, timeHuman));
        }
        return result;
    }
    catch (exception) {
        Out.log('parseToForecast', [rawData], String(exception));
        return null;
    }
}
exports.parseToForecast = parseToForecast;
//# sourceMappingURL=ParserModule.js.map