"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logginEnabled = false;
function log(functionName, params = [], message = null) {
    if (!exports.logginEnabled)
        return;
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