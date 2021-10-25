import { routeLoggerMiddleware } from '../../../middlewares'
import { logger, express } from '../dependencies'
import { IApplicationConfiguration } from '../types'

export const addLogger = (app: express.Application, config: IApplicationConfiguration) => {
    app.use(logger(`dev`))
    app.use(routeLoggerMiddleware)
}