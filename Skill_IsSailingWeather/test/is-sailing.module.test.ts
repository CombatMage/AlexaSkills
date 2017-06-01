import { expect } from "chai";
import { getWindFromForecast } from "../modules/is-sailing.module";
import { Wind } from "../modules/Wind";

process.env.NODE_ENV = "test";

describe("getWindFromForecast", () => {
    describe("returns wind information from forecast for given time", () => {
        it("should return the first entry for the present time", () => {
            const forecast = [
                new Wind(undefined, undefined, undefined, undefined),
                new Wind(undefined, undefined, undefined, undefined)]

            const result = getWindFromForecast(forecast, Date.now());
            expect(result).to.be.eql(forecast[0]);
        });
    });
});
