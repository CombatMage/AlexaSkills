import * as Api from "./api.module";
import * as Parser from "./parser.module";
import * as Sailing from "./is-sailing.module";
import * as Speak from "./speak.module";
import { ApiError } from "./api-error";
import { info, error } from "./logger.module";

export function handleIntentLaunch(onFinished: (message: string) => any) {
    info("handleIntentLaunch");
    onFinished(Speak.getLaunchMessage());
}

export function handleIntentIsSailingWeather(
    location: string,
    onFinished: (message: string) => any) {

    info("handleIntentIsSailingWeather: location is " + location);
    Api.getCurrentForecast(
        location,
        (result) => {
            const apiError = Parser.parseToError(result);
            if (apiError) {
                error("handleIntentIsSailingWeather: received error from api: " + apiError.toString());
                return handleApiError(location, apiError, onFinished);
            }

            const forecast = Parser.parseToForecast(result);
            if (!forecast || forecast.length === 0) {
                error("handleIntentIsSailingWeather: no forecast was received from api");
                return handleError(onFinished);
            }

            const wind = Sailing.getWindFromForecast(forecast, Date.now());
            if (!wind) {
                error("handleIntentIsSailingWeather: no data was received from forecast");
                return handleError(onFinished);
            }

            const responseStrength = Speak.getPositiveResponseForWindSpeed(wind.speedBft, location);
            const responseDir = Speak.getPositiveResponseForWindDirection(wind.windDirection);

            onFinished(`${responseStrength} ${responseDir}`);
        },
        (error) => {
            return handleError(onFinished);
        },
    );
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
