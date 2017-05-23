export class ApiError {
    constructor(private _errorCode: string) { 
    }

    get errorCode(): string {
        return this._errorCode;
    }

    get isCityUnkown(): boolean {
        return this._errorCode == "404"
    }

    public toString = () : string => {
        return `ApiError (_errorCode: ${this._errorCode})`;
    }
}
