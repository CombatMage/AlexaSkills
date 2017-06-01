import * as Winston from "winston";

export function info(message: string) {
    if (process.env.NODE_ENV !== "test") {
        Winston.info(message);
    }
}

export function error(message: string) {
    if (process.env.NODE_ENV !== "test") {
        Winston.error(message);
    }
}
