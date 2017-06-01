import { info, error } from "./logger.module";

export class Wind {

    constructor(
        private mSpeedMs: number,
        private mDegree: number,
        private mTimeUnix: number,
        private mTimeHuman: string) {}

    get speedMs(): number {
        return this.mSpeedMs;
    }

    get degree(): number {
        return this.mDegree;
    }

    get timeUnix(): number {
        return this.mTimeUnix;
    }

    get timeHuman(): string {
        return this.mTimeHuman; // "2017-05-18 09:00:00"
    }

    get windDirection(): string {
        info("windDirection: for degree: " + this.mDegree);

        if (isNumberInRange(this.mDegree, 22.5, 67.5)) {
            return "NE";
        } else if (isNumberInRange(this.mDegree, 67.5, 112.5)) {
            return "E";
        } else if (isNumberInRange(this.mDegree, 112.5, 157.5)) {
            return "SE";
        } else if (isNumberInRange(this.mDegree, 157.5, 202.5)) {
            return "S";
        } else if (isNumberInRange(this.mDegree, 202.5, 247.5)) {
            return "SW";
        } else if (isNumberInRange(this.mDegree, 247.5, 292.5)) {
            return "W";
        } else if (isNumberInRange(this.mDegree, 292.5, 337.5)) {
            return "NW";
        }
        return "N";
    }

    get speedBft(): number {
        info("speedBft: for speed: " + this.mSpeedMs);

        if (this.mSpeedMs < 0.3) {
            return 0;
        } else if (this.mSpeedMs < 1.6) {
            return 1;
        } else if (this.mSpeedMs < 3.4) {
            return 2;
        } else if (this.mSpeedMs < 5.5) {
            return 3;
        } else if (this.mSpeedMs < 8.0) {
            return 4;
        } else if (this.mSpeedMs < 10.8) {
            return 5;
        } else if (this.mSpeedMs < 13.9) {
            return 6;
        } else if (this.mSpeedMs < 17.2) {
            return 7;
        } else if (this.mSpeedMs < 20.8) {
            return 8;
        } else if (this.mSpeedMs < 24.5) {
            return 9;
        } else if (this.mSpeedMs < 28.5) {
            return 10;
        } else if (this.mSpeedMs < 32.7) {
            return 11;
        }
        return 12;
    }

    /**
     * Check forecast matches to given date.
     * @param date expected pattern is '2017-05-18'
     */
    public isOnDate(date: string): boolean {
        const selfDate = this.timeHuman.split(" ")[0];

        const selfDay = Number(selfDate.split("-")[2]);
        const day = Number(date.split("-")[2]);

        return selfDay === day;
    }

    /**
     * Get the diff between the time associate with this object and given time
     * @param time pattern is '12:00'
     */
    public getTimeDiffMinutes(time: string): number {
        const selfTime = this.timeHuman.split(" ")[1];

        const selfHour = selfTime.split(":")[0];
        const hour = time.split(":")[0];

        const selfMinutes = selfTime.split(":")[1];
        const minutes = time.split(":")[1];

        const diffMinutes = Math.abs(Number(selfMinutes) - Number(minutes));
        const diffHours = Math.abs(Number(selfHour) - Number(hour));

        return diffMinutes + (diffHours * 60);
    }
}

function isNumberInRange(value: number, start: number, end: number): boolean {
    return value >= start && value < end;
}
