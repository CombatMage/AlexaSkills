import { expect } from "chai";
import { getWindFromForecast } from "../modules/is-sailing.module";
import { Wind } from "../modules/Wind";

process.env.NODE_ENV = "test";

describe("is-sailing.module ist used to filter parsed forecast information for requirement", () => {
    describe("returns wind information from forecast for given time", () => {
        it("should return the first entry for the present time", () => {
            const forecast = [
                new Wind(undefined, undefined, undefined, "2017-05-20 09:00:00"),
                new Wind(undefined, undefined, undefined, "2017-05-21 09:00:00")];

            const result = getWindFromForecast(forecast, "", "");
            expect(result).to.be.eql(forecast[0]);
        });
    });
});
