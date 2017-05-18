"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Out = require("./Logger");
const Wind_1 = require("./Wind");
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