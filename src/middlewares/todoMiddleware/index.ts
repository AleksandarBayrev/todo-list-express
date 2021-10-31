import express from 'express'
import { TodosCache } from './cache'
export const todoMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const username = req.cookies['username']

    if (username) {
        const todos = TodosCache.get(username)
        if (!todos) {
            TodosCache.set(username, [])
        }
    }
    next()
}