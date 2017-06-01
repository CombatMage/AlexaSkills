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

export function handleIntentIsSailingWeather(location: string, onFinished: (message: string) => any) {
    info("handleIntentIsSailingWeather: location is " + location);

    getCurrentForecast(location).then((res) => {
        handleResponse(location, res, onFinished);
    }).catch((error) => {
        handleError(onFinished);
    });
}

function handleResponse(requestedLocation: string, response: string, onFinished: (message: string) => any) {
    const apiError = Parser.parseToError(response);
    if (apiError) {
        error("handleIntentIsSailingWeather: received error from api: " + apiError.toString());
        handleApiError(requestedLocation, apiError, onFinished);
    } else {
        const forecast = Parser.parseToForecast(requestedLocation);
        if (!forecast || forecast.length === 0) {
            error("handleIntentIsSailingWeather: no forecast was received from api");
            handleError(onFinished);
        } else {
            const wind = Sailing.getWindFromForecast(forecast, Date.now());
            if (!wind) {
                error("handleIntentIsSailingWeather: no data was received from forecast");
                handleError(onFinished);
            } else {
                const responseStrength = Speak.getPositiveResponseForWindSpeed(wind.speedBft, requestedLocation);
                const responseDir = Speak.getPositiveResponseForWindDirection(wind.windDirection);
                onFinished(`${responseStrength} ${responseDir}`);
            }
        }
    }
}

function handleApiError(location: string, error: ApiError, onResult: (message: string) => any) {
    info("handleApiError: error is " + error.toString());
    if (error.isCityUnkown) {
        onResult(Speak.getErrorForCityUnkown(location));
    } else {
        onResult(Speak.TELL_ERROR_UNKOWN);
    }
}

function handleError(onResult: (message: string) => any) {
    info("handleError");
    onResult(Speak.TELL_ERROR_UNKOWN);
}
