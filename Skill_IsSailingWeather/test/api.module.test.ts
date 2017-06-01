import * as chai from "chai";
import { getCurrentForecast } from "../modules/api.module";

const expect = chai.expect;
const assert = chai.assert;

process.env.NODE_ENV = "test";

describe("OpenWeatherApi", () => {
    describe("getCurrentForecast", () => {
        it("returns the current current forecast as json", () => {
            getCurrentForecast("Berlin").then((res) => {
                expect(res).to.be.json;
                expect(res).to.be.not.null;
            }).catch((error) => {
                assert.fail("error: " + error);
            });
        });
    });
});
