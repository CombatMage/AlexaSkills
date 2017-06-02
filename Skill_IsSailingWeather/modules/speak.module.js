"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const speak_result_1 = require("./speak-result");
const TELL = ":tell";
const ASK = ":ask";
exports.ASK_INTRO = `
    Willkommen bei Segelwetter, wie kann ich dir helfen?
    Du kannst mich nach dem Wind in einer bestimmten Stadt fragen.
    Sage Alexa, wie ist der Wind in Berlin?
`;
exports.ASK_HELP = `
    Du kannst mich nach dem Wind in einer bestimmten Stadt fragen.
    Sage Alexa, wie ist der Wind in Berlin?
    Du kannst auch dein bevorzugtes Segelrevier festlegen.
    Sage Alexa, lege mein Segelrevier auf Berlin fest.
    Was möchtest du tun?
`;
exports.TELL_RESULT_STRENGTH = "Aktuell herrscht Windstärke";
exports.TELL_RESULT_DIRECTION = "Der Wind kommt aus Richtung";
exports.TELL_ERROR_CITY_NOT_FOUND = "Tut mir Leid. Ich finde keine Daten";
exports.TELL_ERROR_UNKOWN = "Tut mir Leid, aber ich konnte keine Daten abrufen.";
exports.ASK_LOCATION = `Wie lautet die am nächsten zu deinem See gelegene Stadt?
    Du kannst mir auch sagen in welcher Stadt du üblicherweise unterwegs bist.
`;
exports.ASK_REPEAT = "Tut mir Leid, ich habe das nicht verstanden.";
exports.DIR_N = "Nord";
exports.DIR_NE = "Nord-Ost";
exports.DIR_E = "Ost";
exports.DIR_SE = "Süd-Ost";
exports.DIR_S = "Süd";
exports.DIR_SW = "Süd-West";
exports.DIR_W = "West";
exports.DIR_NW = "Nord-West";
function getErrorApi(error, location) {
    let message;
    if (error.isCityUnkown) {
        message = `${exports.TELL_ERROR_CITY_NOT_FOUND} für ${location}`;
    }
    else {
        message = exports.TELL_ERROR_UNKOWN;
    }
    return new speak_result_1.SpeakResult(TELL, message, "");
}
exports.getErrorApi = getErrorApi;
function getErrorGeneric() {
    return new speak_result_1.SpeakResult(TELL, exports.TELL_ERROR_UNKOWN, "");
}
exports.getErrorGeneric = getErrorGeneric;
function getResultForWind(wind, location, date, time) {
    const responseStrength = getPositiveResponseForWindSpeed(wind.speedBft, location);
    const responseDir = getPositiveResponseForWindDirection(wind.windDirection);
    const message = `${responseStrength} ${responseDir}`;
    return new speak_result_1.SpeakResult(TELL, message, "");
}
exports.getResultForWind = getResultForWind;
function getPositiveResponseForWindSpeed(speed, location) {
    return `${exports.TELL_RESULT_STRENGTH} ${speed} in ${location}.`;
}
function getPositiveResponseForWindDirection(direction) {
    const dirSpeak = convertDirectionToLanguage(direction);
    return `${exports.TELL_RESULT_DIRECTION} ${dirSpeak}`;
}
function getRepeatMessage() {
    return exports.ASK_REPEAT;
}
exports.getRepeatMessage = getRepeatMessage;
function getLaunchMessage() {
    return exports.ASK_INTRO;
}
exports.getLaunchMessage = getLaunchMessage;
function getRequestForLocation() {
    return exports.ASK_LOCATION;
}
exports.getRequestForLocation = getRequestForLocation;
function getResponseForHelp() {
    return exports.ASK_HELP;
}
exports.getResponseForHelp = getResponseForHelp;
function convertDirectionToLanguage(direction) {
    let dirSpeak = "";
    if (direction === "N") {
        dirSpeak = exports.DIR_N;
    }
    else if (direction === "NE") {
        dirSpeak = exports.DIR_NE;
    }
    else if (direction === "E") {
        dirSpeak = exports.DIR_E;
    }
    else if (direction === "SE") {
        dirSpeak = exports.DIR_SE;
    }
    else if (direction === "S") {
        dirSpeak = exports.DIR_S;
    }
    else if (direction === "SW") {
        dirSpeak = exports.DIR_SW;
    }
    else if (direction === "W") {
        dirSpeak = exports.DIR_W;
    }
    else if (direction === "NW") {
        dirSpeak = exports.DIR_NW;
    }
    return dirSpeak;
}
exports.convertDirectionToLanguage = convertDirectionToLanguage;
//# sourceMappingURL=speak.module.js.map