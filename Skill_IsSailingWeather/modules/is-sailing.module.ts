import { Wind } from "./wind";

export function getWindFromForecast(forecast: Wind[], timestamp: number): Wind {
    return forecast[0];
}
