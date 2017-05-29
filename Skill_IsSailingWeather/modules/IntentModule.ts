import * as Out from "./Logger";
import * as Api from "./ApiModule";
import * as Parser from "./ParserModule";
import * as Sailing from "./IsSailingModule";
import * as Speak from "./SpeakModule";
import { ApiError } from "./ApiError";

export function handleIntentLaunch(onFinished: (message: string) => any) {
    onFinished(Speak.getLaunchMessage());
}

export function handleIntentIsSailingWeather(
    location: string,
    onFinished: (message: string) => any) {
    Out.log("handleIntentIsSailingWeather", [location]);

    Api.getCurrentForecast(
        location,
        (result) => {
            const error = Parser.parseToError(result);
            if (error) {
                Out.log("handleIntentIsSailingWeather", [location], "received error " + String(error));
                return handleApiError(location, error, onFinished);
            }

            const forecast = Parser.parseToForecast(result);
            if (!forecast || forecast.length === 0)
            {
                Out.log("handleIntentIsSailingWeather", [location], "no forecast available");
                return handleError(onFinished);
            }

            const wind = Sailing.getWindFromForecast(forecast, Date.now());
            if (!wind) {
                Out.log("handleIntentIsSailingWeather", [location], "no wind data found");
                return handleError(onFinished);
            }

            const responseStrength = Speak.getPositiveResponseForWindSpeed(wind.speedBft, location);
            const responseDir = Speak.getPositiveResponseForWindDirection(wind.windDirection);

            onFinished(`${responseStrength} ${responseDir}`);
        },
        (error) => {
            return handleError(onFinished);
        }
    )
}

function handleApiError(location: string, error: ApiError, onResult: (message: string) => any) {
    Out.log("handleApiError", [error.toString()]);

    if (error.isCityUnkown) {
        onResult(Speak.getErrorForCityUnkown(location));
    } else {
        onResult(Speak.TELL_ERROR_UNKOWN);
    }
}

function handleError(onResult: (message: string) => any) {
    Out.log("handleError");
    onResult(Speak.TELL_ERROR_UNKOWN);
}
