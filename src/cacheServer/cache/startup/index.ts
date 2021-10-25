import { express } from '../dependencies'
import { IApplicationConfiguration } from '../types'
import { addErrorHandler } from './addErrorHandler'
import { addFourOhFourHandler } from './addFourOhFourHandler'
import { addJson } from './addJson'
import { addLogger } from './addLogger'
import { addUrlEncodedMiddleware } from './addUrlEncodedMiddleware'
import { mapRoutes } from './mapRoutes'
import { setupCookieParser } from './setupCookieParser'

export const startupConfiguration = (app: express.Application, configuration: IApplicationConfiguration) => {
    addLogger(app, configuration)
    addJson(app, configuration)
    addUrlEncodedMiddleware(app)
    setupCookieParser(app)
    mapRoutes(app)
    addFourOhFourHandler(app)
    addErrorHandler(app)
}