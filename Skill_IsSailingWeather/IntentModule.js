"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Out = require("./Logger");
const Api = require("./ApiModule");
const Parser = require("./ParserModule");
const Sailing = require("./IsSailingModule");
const Speak = require("./SpeakModule");
function handleIntentIsSailingWeather(location, onFinished) {
    Api.getCurrentForecast(location, (result) => {
        let forecast = Parser.parseToForecast(result);
        if (!forecast || forecast.length == 0)
            return handleError(onFinished);
        let wind = Sailing.getWindFromForecast(forecast, Date.now());
        if (!wind)
            return handleError(onFinished);
        let output = Speak.getPositiveResponseForWindSpeed(wind.speedBft);
        onFinished(output);
    }, (error) => {
        return handleError(onFinished);
    });
}
exports.handleIntentIsSailingWeather = handleIntentIsSailingWeather;
function handleError(onResult) {
    Out.log('handleError');
    onResult('error');
}
//# sourceMappingURL=IntentModule.js.map