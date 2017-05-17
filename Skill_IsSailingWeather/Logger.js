"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(functionName, params = [], message = null) {
    var out = functionName + '(';
    for (let param of params) {
        out += param + ',';
    }
    out += ')';
    if (message != null) {
        out += ': ' + message;
    }
    console.log(out);
}
exports.log = log;
//# sourceMappingURL=Logger.js.map