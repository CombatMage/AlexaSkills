export let TELL_INTRO = `Hallo, ich kann dir einen Wind Wetterbericht geben. 
    Sage Alexa, wie ist der Wind in Berlin`;

export let TELL_RESULT = 'Aktuell herrscht Windstärke';

export let ASK_LOCATION = `Wie lautet die am nächsten zu deinem See gelegene Stadt?
    Du kannst mir auch sagen in welcher Stadt du üblicherweise unterwegs bist.
`;

export let ASK_REPEAT = 'Tut mir Leid, ich habe das nicht verstanden.'

export function getRepeatMessage(): string {
    return ASK_REPEAT;
}

export function getLaunchMessage(): string {
    return TELL_INTRO;
}

export function getRequestForLocation(): string {
    return ASK_LOCATION;
}

export function getPositiveResponseForWindSpeed(
    speed: number, 
    location: string): string {
    return `${TELL_RESULT} ${speed} in ${location}.`;
}
