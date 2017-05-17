"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WindData {
    foobar() {
        return "42";
    }
}
exports.WindData = WindData;
function parseResult(rawData) {
    let json = JSON.parse(rawData);
    return new WindData();
}
exports.parseResult = parseResult;
//# sourceMappingURL=ParserModule.js.map