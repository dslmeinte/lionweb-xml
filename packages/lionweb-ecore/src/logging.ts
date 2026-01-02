export enum LogLevel {
    debug,
    info,
    warning,
    error,
    fatal
}

export const log = (logLevel: LogLevel, message: string) => {
    console.log(`[${LogLevel[logLevel].toUpperCase()}] ${message}`)
}

