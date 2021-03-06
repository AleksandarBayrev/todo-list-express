import { Environment } from '../app.constants'
import { express } from '../dependencies'
import { ExpressError } from '../types'

export const addErrorHandler = (app: express.Application) => {
    // error handler
    app.use(function (err: ExpressError, req: express.Request, res: express.Response, next: express.NextFunction) {
        // set locals, only providing error in development
        res.locals.message = err.message
        res.locals.error = req.app.get('env') === Environment.Development ? err : {}

        // render the error page
        res.status(err.status || 500)
        res.send(JSON.stringify(err))
    })
}