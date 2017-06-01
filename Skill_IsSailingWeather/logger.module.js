"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Winston = require("winston");
function info(message) {
    if (process.env.NODE_ENV !== "test") {
        Winston.info(message);
    }
}
exports.info = info;
function error(message) {
    if (process.env.NODE_ENV !== "test") {
        Winston.error(message);
    }
}
exports.error = error;
//# sourceMappingURL=logger.module.js.map