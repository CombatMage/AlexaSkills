import { expect } from "chai";
import * as unit from "../modules/speak.module";

process.env.NODE_ENV = "test";

describe("Helper for language ouput", () => {
    describe("getPositiveResponseForWindDirection", () => {
        it("should return a positive response for alexa, containing the given direction", () => {
            const response = unit.getPositiveResponseForWindDirection("NE");
            expect(response).to.be.string;
            expect(response).to.contain(unit.DIR_NE);
            expect(response).to.contain(unit.TELL_RESULT_DIRECTION);
        });
    });

    describe("getPositiveResponseForWindSpeed", () => {
        it("should return a positive response for alexa, containing the given wind information", () => {
            const response = unit.getPositiveResponseForWindSpeed(6,"Erkner");
            expect(response).to.be.string;
            expect(response).to.contain("6");
            expect(response).to.contain("Erkner");
            expect(response).to.contain(unit.TELL_RESULT_STRENGTH);
        });
    });

    describe("getLaunchMessage", () => {
        it("should return the launch message, informing the user of possible actions", () => {
            const response = unit.getLaunchMessage();
            expect(response).to.be.string;
            expect(response).to.contain(unit.ASK_INTRO);
        });
    });

    describe("getRequestForLocation", () => {
        it("should ask the user for his desired location", () => {
            const response = unit.getRequestForLocation();
            expect(response).to.be.string;
            expect(response).to.contain(unit.ASK_LOCATION);
        });
    });
});
