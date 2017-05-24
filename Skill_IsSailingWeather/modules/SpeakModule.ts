export let TELL_INTRO = `
    Hallo wie kann ich dir helfen?
    Du kannst mich nach dem Wind in einer bestimmten Stadt fragen.
`;

export let TELL_RESULT_STRENGTH = 'Aktuell herrscht Windstärke';
export let TELL_RESULT_DIRECTION = 'Der Wind kommt aus Richtung';
export let TELL_ERROR_CITY_NOT_FOUND = 'Tut mir Leid. Ich finde keine Daten'; 
export let TELL_ERROR_UNKOWN = 'Tut mir Leid, aber ich konnte keine Daten abrufen.';

export let ASK_LOCATION = `Wie lautet die am nächsten zu deinem See gelegene Stadt?
    Du kannst mir auch sagen in welcher Stadt du üblicherweise unterwegs bist.
`;

export let ASK_REPEAT = 'Tut mir Leid, ich habe das nicht verstanden.'

export let DIR_N = 'Nord';
export let DIR_NE = 'Nord-Ost';
export let DIR_E = 'Ost';
export let DIR_SE = 'Süd-Ost';
export let DIR_S = 'Süd';
export let DIR_SW = 'Süd-West';
export let DIR_W = 'West';
export let DIR_NW = 'Nord-West';

export function getRepeatMessage(): string {
    return ASK_REPEAT;
}

export function getLaunchMessage(): string {
    return TELL_INTRO;
}

export function getRequestForLocation(): string {
    return ASK_LOCATION;
}

export function getErrorForCityUnkown(location: string): string {
    return `${TELL_ERROR_CITY_NOT_FOUND} für ${location}`;
}

export function getPositiveResponseForWindSpeed(
    speed: number, 
    location: string): string {
    return `${TELL_RESULT_STRENGTH} ${speed} in ${location}.`;
}

export function getPositiveResponseForWindDirection(direction: string) {
    var dirSpeak = ""
    if (direction == 'N') {
        dirSpeak = DIR_N;
    }
    else if (direction == 'NE') {
        dirSpeak = DIR_NE;
    }
    else if (direction == 'E') {
        dirSpeak = DIR_E;
    }
    else if (direction == 'SE') {
        dirSpeak = DIR_SE;
    }
    else if (direction == 'S') {
        dirSpeak = DIR_S;
    }
    else if (direction == 'SW') {
        dirSpeak = DIR_SW;
    }
    else if (direction == 'W') {
        dirSpeak = DIR_W;
    }
    else if (direction == 'NW') {
        dirSpeak = DIR_NW;
    }
    return `${TELL_RESULT_DIRECTION} ${dirSpeak}`;
}
