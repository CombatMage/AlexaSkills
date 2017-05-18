import { Wind } from './Wind';

export function getWindFromForecast(forecast: Array<Wind>, timestamp: number): Wind {
    return forecast[0];
}
