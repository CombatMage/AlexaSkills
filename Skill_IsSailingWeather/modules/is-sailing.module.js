"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Finds the forecast which matches the desired time slot best.
 * If no time was given, the first entry is returned.
 * If the time is more than 6 hours in the future, no forecast is returned.
 * @param forecast List of wind objects
 * @param date desired time in forma "2017-05-18"
 * @param time desired time in format "12:00"
 */
function getWindFromForecast(forecast, date, time) {
    if (!forecast || forecast.length === 0) {
        return undefined;
    }
    else if (!time) {
        return forecast[0];
    }
    else {
        // let searchedForecast: Wind;
        // let diff = 6 * 60;
        // TODO
        return forecast[0];
    }
}
exports.getWindFromForecast = getWindFromForecast;
//# sourceMappingURL=is-sailing.module.js.map