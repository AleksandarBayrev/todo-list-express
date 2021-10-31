import express from 'express'
import { CacheServerClient } from '../../cacheServerClient'
import { LoginStatus } from '../../server/app/types/LoginStatus'
import { LoginCache } from './cache'

const getLoginStatus = async (username: string): Promise<LoginStatus> => {
    const status = await CacheServerClient.get(`login-${username}`) as {itemData: LoginStatus}
    return status.itemData
}

export const loginMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const username = req.cookies['username']
    const sessionId = req.cookies['sessionId']

    if (username) {
        const status = await getLoginStatus(username)
        if (status) {
            LoginCache.set(sessionId, status)
        }
    }
    next()
}