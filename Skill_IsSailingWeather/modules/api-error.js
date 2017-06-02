"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError {
    constructor(mErrorCode) {
        this.mErrorCode = mErrorCode;
        this.toString = () => {
            return `ApiError (_errorCode: ${this.mErrorCode})`;
        };
    }
    get errorCode() {
        return this.mErrorCode;
    }
    get isCityUnkown() {
        return this.mErrorCode === "404";
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=api-error.js.map