import { LoginCache } from '../../../middlewares/loginMiddleware/cache'
import { appConfig } from '../app.config'
import { Environment } from '../app.constants'
import { express } from '../dependencies'
import { buildRenderProps, getHostname } from '../helpers'
import { ExpressError, RenderProps } from '../types'

export const addErrorHandler = (app: express.Application) => {
    // error handler
    app.use(function (err: ExpressError, req: express.Request, res: express.Response, next: express.NextFunction) {
        const sessionId = req.cookies['sessionId']
        const loggedIn = (sessionId && LoginCache.get(sessionId)) || false
        const renderOptions: RenderProps = {
            title: `${appConfig.applicationName} - Something went wrong :/`,
            header: appConfig.applicationName,
            footer: `Copyright (C) ${new Date().getFullYear()}`,
            css: appConfig.assets.css,
            js: appConfig.assets.js,
            loggedIn: loggedIn.toString(),
            hostUrl: getHostname(req)
        }
        // set locals, only providing error in development
        res.locals.message = err.message
        res.locals.error = req.app.get('env') === Environment.Development ? err : {}

        // render the error page
        res.status(err.status || 500)
        res.render('error', buildRenderProps(renderOptions))
    })
}