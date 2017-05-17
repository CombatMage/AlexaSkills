export class WindData {
    foobar(): string {
        return "42";
    }
}

export function parseResult(rawData: string): WindData {
    let json = JSON.parse(rawData);
    return new WindData();
}
