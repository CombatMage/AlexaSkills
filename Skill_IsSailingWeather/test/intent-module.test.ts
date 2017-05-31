import * as chai from "chai";
import { handleIntentIsSailingWeather } from "../modules/IntentModule";

const expect = chai.expect;

describe("IntentModule", () => {
    describe("handleIntentIsSailingWeather", () => {
        it("should return non empty string", () => {
            handleIntentIsSailingWeather(
                "Berlin,de", 
                (result) => {
                    expect(result).to.be.string;
                    expect(result).to.contain("Die aktuelle Windstärke");
            })
        });
    });
});
