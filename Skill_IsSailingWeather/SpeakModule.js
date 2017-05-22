"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TELL_INTRO = `Hallo, ich kann dir einen Wind Wetterbericht geben. 
    Sage Alexa, wie ist der Wind in Berlin`;
exports.TELL_RESULT_STRENGTH = 'Aktuell herrscht Windstärke';
exports.TELL_RESULT_DIRECTION = 'Der Wind kommt aus Richtung';
exports.ASK_LOCATION = `Wie lautet die am nächsten zu deinem See gelegene Stadt?
    Du kannst mir auch sagen in welcher Stadt du üblicherweise unterwegs bist.
`;
exports.ASK_REPEAT = 'Tut mir Leid, ich habe das nicht verstanden.';
exports.DIR_N = 'Nord';
exports.DIR_NE = 'Nord-Ost';
exports.DIR_E = 'Ost';
exports.DIR_SE = 'Süd-Ost';
exports.DIR_S = 'Süd';
exports.DIR_SW = 'Süd-West';
exports.DIR_W = 'West';
exports.DIR_NW = 'Nord-West';
function getRepeatMessage() {
    return exports.ASK_REPEAT;
}
exports.getRepeatMessage = getRepeatMessage;
function getLaunchMessage() {
    return exports.TELL_INTRO;
}
exports.getLaunchMessage = getLaunchMessage;
function getRequestForLocation() {
    return exports.ASK_LOCATION;
}
exports.getRequestForLocation = getRequestForLocation;
function getPositiveResponseForWindSpeed(speed, location) {
    return `${exports.TELL_RESULT_STRENGTH} ${speed} in ${location}.`;
}
exports.getPositiveResponseForWindSpeed = getPositiveResponseForWindSpeed;
function getPositiveResponseForWindDirection(direction) {
    var dirSpeak = "";
    if (direction == 'N') {
        dirSpeak = exports.DIR_N;
    }
    else if (direction == 'NE') {
        dirSpeak = exports.DIR_NE;
    }
    else if (direction == 'E') {
        dirSpeak = exports.DIR_E;
    }
    else if (direction == 'SE') {
        dirSpeak = exports.DIR_SE;
    }
    else if (direction == 'S') {
        dirSpeak = exports.DIR_S;
    }
    else if (direction == 'SW') {
        dirSpeak = exports.DIR_SW;
    }
    else if (direction == 'W') {
        dirSpeak = exports.DIR_W;
    }
    else if (direction == 'NW') {
        dirSpeak = exports.DIR_NW;
    }
    return `${exports.TELL_RESULT_DIRECTION} ${dirSpeak}`;
}
exports.getPositiveResponseForWindDirection = getPositiveResponseForWindDirection;
//# sourceMappingURL=SpeakModule.js.map