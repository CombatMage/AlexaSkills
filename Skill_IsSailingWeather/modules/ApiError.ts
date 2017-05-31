export class ApiError {
    constructor(private mErrorCode: string) {
    }

    get errorCode(): string {
        return this.mErrorCode;
    }

    get isCityUnkown(): boolean {
        return this.mErrorCode === "404";
    }

    public toString = (): string => {
        return `ApiError (_errorCode: ${this.mErrorCode})`;
    }
}
