export class Wind {

    constructor(
        private _speedMs: number,
        private _degree: number,
        private _timeUnix: number,
        private _timeHuman: string) {}

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

    get speedBft(): number {
        if (this._speedMs < 0.3)
            return 0;
        if (this._speedMs < 1.6)
            return 1;
        if (this._speedMs < 3.4)
            return 2;
        if (this._speedMs < 5.5)
            return 3;
        if (this._speedMs < 8.0)
            return 4;
        if (this._speedMs < 10.8)
            return 5;
        if (this._speedMs < 13.9)
            return 6;
        if (this._speedMs < 17.2)
            return 7;
        if (this._speedMs < 20.8)
            return 8;
        if (this._speedMs < 24.5)
            return 9;
        if (this._speedMs < 28.5)
            return 10;
        if (this._speedMs < 32.7)
            return 11;
        return 12
    }
}