import { IApplicationConfiguration } from '../types'
import { routeLoggerMiddleware } from '../../../middlewares'
import { logger, express } from '../dependencies'

export const addLogger = (app: express.Application, config: IApplicationConfiguration) => {
    app.use(logger(`dev`))
    app.use(routeLoggerMiddleware)
}