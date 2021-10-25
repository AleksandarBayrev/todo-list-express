import express from 'express'
import { CacheServerClient } from '../../cacheServerClient'
import { LoginStatus } from '../../server/app/types/LoginStatus'

const getLoginStatus = async (username: string): Promise<LoginStatus> => {
    return await CacheServerClient.get(`login-${username}`) as LoginStatus
}

export const loginMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const sessionId = req.cookies['sessionId']
    const username = req.cookies['username']

    if (!req.loginStatus) req.loginStatus = {}

    if (username) {
        req.loginStatus[sessionId] = await getLoginStatus(username)
    }
    next()
}