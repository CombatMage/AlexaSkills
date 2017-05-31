import { expect } from "chai";
import { Wind } from "../modules/Wind";

describe("Wind", () => {
    describe("should convert wind speed from m/s to beauford", () => {
        it("should return 0 for speed < 0.3", () => {
            let wind = new Wind(0, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
            wind = new Wind(0.29, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
            wind = new Wind(-1, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
        });
        it("should return 12 for speed >= 32.7", () => {
            let wind = new Wind(32.7, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(12);
            wind = new Wind(100, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(12);
        });
    });
    describe("should convert wind degree to direction", () => {
        it("should return N for wind from 0 degree", () => {
            const wind = new Wind(32.7, 0, undefined, undefined);
            expect(wind.windDirection).to.be.eql("N");
        });
        it("should return SW for wind from 230 degree", () => {
            const wind = new Wind(32.7, 230, undefined, undefined);
            expect(wind.windDirection).to.be.eql("SW");
        });
    });
});
