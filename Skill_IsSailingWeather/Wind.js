"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wind {
    constructor(_speedMs, _degree, _timeUnix, _timeHuman) {
        this._speedMs = _speedMs;
        this._degree = _degree;
        this._timeUnix = _timeUnix;
        this._timeHuman = _timeHuman;
    }
    get speedMs() {
        return this._speedMs;
    }
    get degree() {
        return this._degree;
    }
    get timeUnix() {
        return this._timeUnix;
    }
    get timeHuman() {
        return this._timeHuman;
    }
    get windDirection() {
        if (isNumberInRange(this._degree, 22.5, 67.5))
            return 'NE';
        if (isNumberInRange(this._degree, 67.5, 112.5))
            return 'E';
        if (isNumberInRange(this._degree, 112.5, 157.5))
            return 'SE';
        if (isNumberInRange(this._degree, 157.5, 202.5))
            return 'S';
        if (isNumberInRange(this._degree, 202.5, 247.5))
            return 'SW';
        if (isNumberInRange(this._degree, 247.5, 292.5))
            return 'W';
        if (isNumberInRange(this._degree, 292.5, 337.5))
            return 'NW';
        return 'N';
    }
    get speedBft() {
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
        return 12;
    }
}
exports.Wind = Wind;
function isNumberInRange(value, start, end) {
    return value >= start && value < end;
}
//# sourceMappingURL=Wind.js.map