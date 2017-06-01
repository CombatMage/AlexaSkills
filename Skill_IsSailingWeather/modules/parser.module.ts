import { Wind } from "./wind";
import { ApiError } from "./api-error";
import { info, error } from "./logger.module";

export function parseToError(rawData: string): ApiError {
    info("parseToError: checking data for error " + rawData);
    try {
        const object = JSON.parse(rawData);
        const hasError = object.cod !== "200";
        if (!hasError) {
            return null;
        }
        return new ApiError(object.cod);
    } catch (exception) {
        info("parseToError: no error was found");
        return null;
    }
}

export function parseToForecast(rawData: string): Wind[] {
    info("parseToForecast: parsing " + rawData + " to forecast");
    try {
        const object = JSON.parse(rawData);

        const count = object.cnt;
        if (!count) {
            return null;
        }

        const result = new Array<Wind>();
        for (const windObject of object.list) {
            const speedMs = windObject.wind.speed;
            const degree = windObject.wind.deg;
            const timeUnix = windObject.dt;
            const timeHuman = windObject.dt_txt;
            result.push(new Wind(speedMs, degree, timeUnix, timeHuman));
        }
        return result;
    } catch (exception) {
        error("parseToForecast: parsing failed with " + exception);
        return null;
    }
}
