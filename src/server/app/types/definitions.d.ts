interface LoginStatus {
    status: boolean
    sessionId: string
    username: string
}

declare namespace Express {
    interface Request {
        loginStatus: {[key: string]: LoginStatus | undefined}
    }
}