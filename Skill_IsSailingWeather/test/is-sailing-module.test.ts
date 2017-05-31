import { expect } from "chai";
import { getWindFromForecast } from "../modules/IsSailingModule";
import { Wind } from "../modules/Wind";

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
