import { expect } from "chai";
import { Wind } from "../modules/wind";

process.env.NODE_ENV = "test";

describe("Wind", () => {
    describe("should convert wind speed from m/s to beauford", () => {

        it("should return 0 for speed < 0.3", () => {
            let wind = new Wind(0, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
            wind = new Wind(0.2, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(0);
        });
        it("should return 1 for speed in [0.3:1.6[", () => {
            let wind = new Wind(0.3, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(1);
            wind = new Wind(1.5, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(1);
        });

        it("should return 2 for speed in [1.6:3.4[", () => {
            let wind = new Wind(1.6, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(2);
            wind = new Wind(3.3, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(2);
        });

        it("should return 3 for speed in [3.4:5.5[", () => {
            let wind = new Wind(3.4, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(3);
            wind = new Wind(5.4, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(3);
        });

        it("should return 4 for speed in [5.5:8.0[", () => {
            let wind = new Wind(5.5, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(4);
            wind = new Wind(7.9, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(4);
        });

        it("should return 5 for speed in [8.0:10.8[", () => {
            let wind = new Wind(8.0, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(5);
            wind = new Wind(10.7, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(5);
        });

        it("should return 6 for speed in [10.8:13.9[", () => {
            let wind = new Wind(10.8, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(6);
            wind = new Wind(13.8, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(6);
        });

        it("should return 7 for speed in [13.9:17.2[", () => {
            let wind = new Wind(13.9, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(7);
            wind = new Wind(17.1, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(7);
        });

        it("should return 8 for speed in [17.2:20.8[", () => {
            let wind = new Wind(17.2, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(8);
            wind = new Wind(20.7, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(8);
        });

        it("should return 9 for speed in [20.8:24.5[", () => {
            let wind = new Wind(20.8, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(9);
            wind = new Wind(24.4, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(9);
        });

        it("should return 10 for speed in [24.5:28.5[", () => {
            let wind = new Wind(24.5, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(10);
            wind = new Wind(28.4, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(10);
        });

        it("should return 11 for speed in [28.5:32.7[", () => {
            let wind = new Wind(28.5, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(11);
            wind = new Wind(32.6, 0, undefined, undefined);
            expect(wind.speedBft).to.be.eql(11);
        });

        it("should return 12 for speed in [32.7:inf[", () => {
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
