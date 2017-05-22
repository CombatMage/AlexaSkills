"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Error {
    constructor(_errorCode) {
        this._errorCode = _errorCode;
    }
    get isCityUnkown() {
        return this._errorCode == "404";
    }
}
exports.Error = Error;
//# sourceMappingURL=Error.js.map