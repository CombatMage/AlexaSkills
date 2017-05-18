import * as Out from './Logger';
import { Wind } from './Wind';

export function parseToForecast(rawData: string): Array<Wind> {
    Out.log('parseToForecast', [rawData])
    try {
        let object = JSON.parse(rawData);
        let count = object.cnt;
        if (!count) 
            return null;

        let result = new Array<Wind>();
        for (let windObject of object.list) {

            let speedMs = windObject.wind.speed;
            let degree = windObject.wind.deg;
            let timeUnix = windObject.dt;
            let timeHuman = windObject.dt_txt;

            result.push(new Wind(speedMs, degree, timeUnix, timeHuman));
        }

        return result;
    }
    catch (exception) {
        Out.log('parseToForecast', [rawData], String(exception));
        return null;
    }
}
