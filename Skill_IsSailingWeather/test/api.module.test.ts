import * as chai from "chai";
import { getCurrentForecast } from "../modules/api.module";

const expect = chai.expect;
const assert = chai.assert;

process.env.NODE_ENV = "test";

describe("OpenWeatherApi", () => {
    describe("get forecast", () => {
        it("returns the current current forecast as json", () => {
            getCurrentForecast(
                "Berlin,de",
                (result) => {
                    expect(result).to.be.json;
                },
                (error) => {
                    assert.fail("error: " + error);
                });
        });
    });
});
