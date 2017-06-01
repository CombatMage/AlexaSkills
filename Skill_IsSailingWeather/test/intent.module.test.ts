import * as chai from "chai";
import { handleIntentIsSailingWeather } from "../modules/intent.module";

const expect = chai.expect;

process.env.NODE_ENV = "test";

describe("IntentModule", () => {
    describe("handleIntentIsSailingWeather", () => {
        it("should return non empty string", () => {
            handleIntentIsSailingWeather(
                "Berlin,de",
                (result) => {
                    expect(result).to.be.string;
                    expect(result).to.contain("Die aktuelle Windstärke");
            });
        });
    });
});
