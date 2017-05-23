export var logginEnabled: boolean = false;

export function log(
    functionName: string, 
    params: Iterable<string> = [], 
    message: string = null): void {
        if (!logginEnabled)
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
