import * as Parser from "./parser.module";
import * as Sailing from "./is-sailing.module";
import * as Speak from "./speak.module";

import { getCurrentForecast } from "./api.module";
import { ApiError } from "./api-error";
import { SpeakResult } from "./speak-result";
import { info, error } from "./logger.module";

export function handleIntentLaunch(onFinished: (message: string) => any) {
    info("handleIntentLaunch");
    onFinished(Speak.getLaunchMessage());
}

export function handleIntentIsSailingWeather(location: string): Promise<SpeakResult> {
    info("handleIntentIsSailingWeather: location is " + location);

    return getCurrentForecast(location).then((res) => {
        const apiError = Parser.parseToError(res);
        const forecast = Parser.parseToForecast(res);
        // TODO these values should be provided by the user
        const now = new Date();
        const date = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay();
        const time = now.getHours() + ":" + now.getMinutes;

        if (apiError) {
            return Speak.getErrorApi(apiError, location);
        } else {
            const requestedWindData = Sailing.getWindFromForecast(forecast, date, time);
            if (!requestedWindData) {
                error("handleIntentIsSailingWeather: no suitable data was found");
                return Speak.getErrorGeneric();
            } else {
                return Speak.getResultForWind(requestedWindData, location, date, time);
            }
        }
    }).catch((error) => {
        return Speak.getErrorGeneric();
    });
}
