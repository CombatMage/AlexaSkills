import * as Request from "request";
import { info, error } from "./logger.module";

const host = "api.openweathermap.org";
const endpoint = "/data/2.5/forecast";

const apiKey = "d0d0ebd199dd630ef800a557ef427882";
const timeoutMillis = 2000;

export function getCurrentForecast(location: string): Promise<string> {
    info("getCurrentForecast: location is " + location);

    const url = formatRequest(location);
    return new Promise((fullfill, reject) => {
        Request(url, {timeout: timeoutMillis}, (error, response, body) => {
            if (error) {
                error("getCurrentForecast: received error " + error);
                reject(error);
            } else {
                info("getCurrentForecast: received response " + body);
                fullfill(body);
            }
        });
    });
}

function formatRequest(location: string): string {
    return `http://${host}${endpoint}?q=${location}&appid=${apiKey}&units=metric`;
}
