"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Request = require("request");
const logger_module_1 = require("./logger.module");
const host = "api.openweathermap.org";
const endpoint = "/data/2.5/forecast";
const apiKey = "d0d0ebd199dd630ef800a557ef427882";
const timeoutMillis = 2000;
function getCurrentForecast(location, onResult, onError) {
    logger_module_1.info("getCurrentForecast: location is " + location);
    const url = formatRequest(location);
    logger_module_1.info("getCurrentForecast: using request " + url);
    Request(url, { timeout: timeoutMillis }, (apiError, response, body) => {
        if (apiError) {
            logger_module_1.error("getCurrentForecast: received error " + apiError);
            onError(logger_module_1.error);
        }
        else {
            logger_module_1.info("getCurrentForecast: received response " + body);
            onResult(body);
        }
    });
}
exports.getCurrentForecast = getCurrentForecast;
function formatRequest(location) {
    return `http://${host}${endpoint}?q=${location}&appid=${apiKey}&units=metric`;
}
//# sourceMappingURL=api.module.js.map