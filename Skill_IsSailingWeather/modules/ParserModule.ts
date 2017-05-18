import * as Out from './Logger';

export class Wind {

    private _speedMs: number;
    private _degree: number;
    private _timeUnix: number;
    private _timeHuman: string

    constructor(object: any) {
        this._speedMs = object.wind.speed;
        this._degree = object.wind.deg;
        this._timeUnix = object.dt;
        this._timeHuman = object.dt_txt;
    }

    get speedMs(): number {
        return this._speedMs;
    }

    get degree(): number {
        return this._degree;
    }

    get timeUnix(): number {
        return this._timeUnix;
    }

    get timeHuman(): string {
        return this._timeHuman;
    }
}

export function parseToForecast(rawData: string): Array<Wind> {
    Out.log('parseToForecast', [rawData])
    try {
        let object = JSON.parse(rawData);
        let count = object.cnt;
        if (!count) 
            return null;

        let result = new Array<Wind>();
        for (let windObject of object.list) {
            result.push(new Wind(windObject));
        }

        return result;
    }
    catch (exception) {
        Out.log('parseToForecast', [rawData], String(exception));
        return null;
    }
}
