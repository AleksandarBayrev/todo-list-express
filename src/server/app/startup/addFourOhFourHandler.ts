import { createError, express } from '../dependencies';

export const addFourOhFourHandler = (app: express.Application) => {
    // catch 404 and forward to error handler
    app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
        next(createError(404))
    })
}