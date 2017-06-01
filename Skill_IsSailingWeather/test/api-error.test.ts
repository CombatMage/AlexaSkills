import { expect } from "chai";
import { ApiError } from "../modules/api-error";

process.env.NODE_ENV = "test";

describe("Error", () => {
    describe("should parse error from json", () => {
        it("should detect error that no matching city found", () => {
            const error = new ApiError("404");
            expect(error.isCityUnkown).to.be.eql(true);
        });
    });
});
