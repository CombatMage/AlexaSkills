import * as chai from "chai";
import { getCurrentForecast } from "../modules/ApiModule";

const expect = chai.expect;
const assert = chai.assert;

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
