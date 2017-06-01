import * as chai from "chai";
import { TELL_RESULT_STRENGTH } from "../modules/speak.module";
import { handleIntentIsSailingWeather } from "../modules/intent.module";

const expect = chai.expect;
const assert = chai.assert;

process.env.NODE_ENV = "test";

describe("IntentModule", () => {
    describe("handleIntentIsSailingWeather", () => {
        it("should return non empty string", () => {
            handleIntentIsSailingWeather("Berlin,de")
                .then((res) => {
                    expect(res).to.be.string;
                    expect(res).to.contain(TELL_RESULT_STRENGTH);
                }).catch((error) => {
                    assert.fail("error: " + error);
            });
        });
    });
});
