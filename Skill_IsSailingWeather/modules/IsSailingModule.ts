import { Wind } from "./Wind";

export function getWindFromForecast(forecast: Wind[], timestamp: number): Wind {
    return forecast[0];
}
