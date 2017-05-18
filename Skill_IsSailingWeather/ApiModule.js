"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request = require("request");
const Out = require("./Logger");
let host = 'api.openweathermap.org';
let endpoint = '/data/2.5/forecast';
let apiKey = 'd0d0ebd199dd630ef800a557ef427882';
function getCurrentForecast(location, onResult, onError) {
    Out.log('getCurrentForecast', [location]);
    Request(formatRequest(location), (error, response, body) => {
        if (error) {
            onError(error);
        }
        else {
            onResult(body);
        }
    });
}
exports.getCurrentForecast = getCurrentForecast;
function formatRequest(location) {
    return `http://${host}${endpoint}?q=${location}&appid=${apiKey}&units=metric`;
}
//# sourceMappingURL=ApiModule.js.map