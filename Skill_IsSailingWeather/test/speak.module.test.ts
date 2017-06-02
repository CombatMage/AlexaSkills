import { expect } from "chai";
import { Wind } from "../modules/wind";
import { getResultForWind, convertDirectionToLanguage } from "../modules/speak.module";

process.env.NODE_ENV = "test";

describe("Helper for language ouput", () => {
    describe("getResultForWind", () => {
        it("it should contain the requested location", () => {
            const wind = new Wind(0, 0, 0, "");
            const result = getResultForWind(wind, "Berlin", "", "");
            expect(result.message).to.contain("Berlin");
        });
        it("it should contain the wind speed", () => {
            const wind = new Wind(10, 0, 0, "");
            const result = getResultForWind(wind, "", "", "");
            expect(result.message).to.contain(wind.speedBft);
        });
        it("it should contain the wind direction", () => {
            const wind = new Wind(0, 120, 0, "");
            const result = getResultForWind(wind, "", "", "");
            expect(result.message).to.contain(convertDirectionToLanguage(wind.windDirection));
        });
    });
});
