"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_module_1 = require("./logger.module");
class Wind {
    constructor(mSpeedMs, mDegree, mTimeUnix, mTimeHuman) {
        this.mSpeedMs = mSpeedMs;
        this.mDegree = mDegree;
        this.mTimeUnix = mTimeUnix;
        this.mTimeHuman = mTimeHuman;
    }
    get speedMs() {
        return this.mSpeedMs;
    }
    get degree() {
        return this.mDegree;
    }
    get timeUnix() {
        return this.mTimeUnix;
    }
    get timeHuman() {
        return this.mTimeHuman;
    }
    get windDirection() {
        logger_module_1.info("windDirection: for degree: " + this.mDegree);
        if (isNumberInRange(this.mDegree, 22.5, 67.5)) {
            return "NE";
        }
        else if (isNumberInRange(this.mDegree, 67.5, 112.5)) {
            return "E";
        }
        else if (isNumberInRange(this.mDegree, 112.5, 157.5)) {
            return "SE";
        }
        else if (isNumberInRange(this.mDegree, 157.5, 202.5)) {
            return "S";
        }
        else if (isNumberInRange(this.mDegree, 202.5, 247.5)) {
            return "SW";
        }
        else if (isNumberInRange(this.mDegree, 247.5, 292.5)) {
            return "W";
        }
        else if (isNumberInRange(this.mDegree, 292.5, 337.5)) {
            return "NW";
        }
        return "N";
    }
    get speedBft() {
        logger_module_1.info("speedBft: for speed: " + this.mSpeedMs);
        if (this.mSpeedMs < 0.3) {
            return 0;
        }
        else if (this.mSpeedMs < 1.6) {
            return 1;
        }
        else if (this.mSpeedMs < 3.4) {
            return 2;
        }
        else if (this.mSpeedMs < 5.5) {
            return 3;
        }
        else if (this.mSpeedMs < 8.0) {
            return 4;
        }
        else if (this.mSpeedMs < 10.8) {
            return 5;
        }
        else if (this.mSpeedMs < 13.9) {
            return 6;
        }
        else if (this.mSpeedMs < 17.2) {
            return 7;
        }
        else if (this.mSpeedMs < 20.8) {
            return 8;
        }
        else if (this.mSpeedMs < 24.5) {
            return 9;
        }
        else if (this.mSpeedMs < 28.5) {
            return 10;
        }
        else if (this.mSpeedMs < 32.7) {
            return 11;
        }
        return 12;
    }
}
exports.Wind = Wind;
function isNumberInRange(value, start, end) {
    return value >= start && value < end;
}
//# sourceMappingURL=wind.js.map