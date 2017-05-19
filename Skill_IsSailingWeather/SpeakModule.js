"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TELL_INTRO = `Hallo, ich kann dir einen Wind Wetterbericht geben. 
    Sage Alexa, wie ist der Wind in Berlin oder
    sage Alexa, wie ist der Wind auf meinem See.`;
exports.TELL_RESULT = 'Aktuell herrscht Windstärke';
exports.ASK_LOCATION = 'TODO';
function getLaunchMessage() {
    return exports.TELL_INTRO;
}
exports.getLaunchMessage = getLaunchMessage;
function getRequestForLocation() {
    return exports.ASK_LOCATION;
}
exports.getRequestForLocation = getRequestForLocation;
function getPositiveResponseForWindSpeed(speed, location) {
    return `${exports.TELL_RESULT} ${speed} in ${location}`;
}
exports.getPositiveResponseForWindSpeed = getPositiveResponseForWindSpeed;
//# sourceMappingURL=SpeakModule.js.map