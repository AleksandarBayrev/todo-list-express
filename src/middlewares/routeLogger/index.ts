import express from 'express'

export const routeLoggerMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`[${req.method}] ${req.url} (HTTP Status: ${res.statusCode}) ${new Date().toISOString()}`)
    console.log('test')
    return next()
}