import * as Parser from "./parser.module";
import * as Sailing from "./is-sailing.module";
import * as Speak from "./speak.module";

import { getCurrentForecast } from "./api.module";
import { ApiError } from "./api-error";
import { info, error } from "./logger.module";

export function handleIntentLaunch(onFinished: (message: string) => any) {
    info("handleIntentLaunch");
    onFinished(Speak.getLaunchMessage());
}

export function handleIntentIsSailingWeather(location: string): Promise<string> {
    info("handleIntentIsSailingWeather: location is " + location);

    return getCurrentForecast(location).then((res) => {
        return handleResponse(location, res);
    }).catch((error) => {
        return handleError();
    });
}

function handleResponse(requestedLocation: string, response: string): string {
    const apiError = Parser.parseToError(response);
    if (apiError) {
        error("handleIntentIsSailingWeather: received error from api: " + apiError.toString());
        return handleApiError(requestedLocation, apiError);
    } else {
        const forecast = Parser.parseToForecast(response);
        if (!forecast || forecast.length === 0) {
            error("handleIntentIsSailingWeather: no forecast was received from api");
            return handleError();
        } else {
            const wind = Sailing.getWindFromForecast(forecast, "");
            if (!wind) {
                error("handleIntentIsSailingWeather: no data was received from forecast");
                return handleError();
            } else {
                const responseStrength = Speak.getPositiveResponseForWindSpeed(wind.speedBft, requestedLocation);
                const responseDir = Speak.getPositiveResponseForWindDirection(wind.windDirection);
                return `${responseStrength} ${responseDir}`;
            }
        }
    }
}

function handleApiError(location: string, error: ApiError): string {
    info("handleApiError: error is " + error.toString());
    if (error.isCityUnkown) {
        return Speak.getErrorForCityUnkown(location);
    } else {
        return Speak.TELL_ERROR_UNKOWN;
    }
}

function handleError(): string {
    info("handleError");
    return Speak.TELL_ERROR_UNKOWN;
}
