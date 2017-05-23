"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError {
    constructor(_errorCode) {
        this._errorCode = _errorCode;
        this.toString = () => {
            return `ApiError (_errorCode: ${this._errorCode})`;
        };
    }
    get errorCode() {
        return this._errorCode;
    }
    get isCityUnkown() {
        return this._errorCode == "404";
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=ApiError.js.map