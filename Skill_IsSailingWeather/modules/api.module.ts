import * as Request from "request";
import { info, error } from "./logger.module";

const host = "api.openweathermap.org";
const endpoint = "/data/2.5/forecast";

const apiKey = "d0d0ebd199dd630ef800a557ef427882";
const timeoutMillis = 2000;

export function getCurrentForecast(
    location: string,
    onResult: (response: string) => any,
    onError: (apiError: any) => any) {
        info("getCurrentForecast: location is " + location);

        const url = formatRequest(location);
        info("getCurrentForecast: using request " + url);
        Request(url, {timeout: timeoutMillis}, (apiError, response, body) => {
            if (apiError) {
                error("getCurrentForecast: received error " + apiError);
                onError(error);
            } else {
                info("getCurrentForecast: received response " + body);
                onResult(body);
            }
        });
}

function formatRequest(location: string): string {
    return `http://${host}${endpoint}?q=${location}&appid=${apiKey}&units=metric`;
}
