import express from 'express'
import { CacheServerClient } from '../../cacheServerClient'
import { LoginStatus } from '../../server/app/types/LoginStatus'

const getLoginStatus = async (username: string): Promise<LoginStatus> => {
    const status = await CacheServerClient.get(`login-${username}`) as {itemData: LoginStatus}
    console.log(`status: ${JSON.stringify(status)}`)
    return status.itemData
}

export const loginMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const username = req.cookies['username']

    if (!req.loginStatus) req.loginStatus = {}

    if (username) {
        const status = await getLoginStatus(username)
        req.loginStatus[status.sessionId] = status
    }
    next()
}