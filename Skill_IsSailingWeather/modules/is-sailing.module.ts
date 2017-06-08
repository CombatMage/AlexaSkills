import { Wind } from "./wind";

/**
 * Finds the forecast which matches the desired time slot best.
 * If no time was given, the first entry is returned.
 * If the time is more than 6 hours in the future, no forecast is returned.
 * @param forecast List of wind objects
 * @param date desired time in forma "2017-05-18"
 * @param time desired time in format "12:00"
 */
export function getWindFromForecast(forecast: Wind[], date: string, time: string): Wind {
    if (!forecast || forecast.length === 0) {
        return undefined;
    } else if (!time) {
        return forecast[0];
    } else {
        const windOnDate = forecast.filter((item) => {
            item.isOnDate(date);
        });

        if (windOnDate) {
            return windOnDate[0];
        }

        return forecast[0];
    }
}
