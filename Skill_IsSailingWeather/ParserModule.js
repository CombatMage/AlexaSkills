"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Out = require("./Logger");
class Wind {
    constructor(object) {
        this._speedMs = object.wind.speed;
        this._degree = object.wind.deg;
        this._timeUnix = object.dt;
        this._timeHuman = object.dt_txt;
    }
    get speedMs() {
        return this._speedMs;
    }
    get degree() {
        return this._degree;
    }
    get timeUnix() {
        return this._timeUnix;
    }
    get timeHuman() {
        return this._timeHuman;
    }
}
exports.Wind = Wind;
function parseToForecast(rawData) {
    Out.log('parseToForecast', [rawData]);
    try {
        let object = JSON.parse(rawData);
        let count = object.cnt;
        if (!count)
            return null;
        let result = new Array();
        for (let windObject of object.list) {
            result.push(new Wind(windObject));
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