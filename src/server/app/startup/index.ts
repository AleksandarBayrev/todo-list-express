import { environmentVariablesCache } from '../cache'
import { express } from '../dependencies'
import { IApplicationConfiguration } from '../types'
import { addErrorHandler } from './addErrorHandler'
import { addFourOhFourHandler } from './addFourOhFourHandler'
import { addJson } from './addJson'
import { addLogger } from './addLogger'
import { addLoginMiddleware } from './addLoginMiddleware'
import { addStaticPaths } from './addStaticPaths'
import { addUrlEncodedMiddleware } from './addUrlEncodedMiddleware'
import { cacheEnvironmentVariables } from './cacheEnvironmentVariables'
import { initCacheClient } from './initCacheClient'
import { mapRoutes } from './mapRoutes'
import { setupCookieParser } from './setupCookieParser'
import { setupViewEngine } from './setupViewEngine'

export const startupConfiguration = (app: express.Application, configuration: IApplicationConfiguration) => {
    cacheEnvironmentVariables(environmentVariablesCache, configuration)
    setupViewEngine(app, configuration)
    addLogger(app, configuration)
    addJson(app, configuration)
    addUrlEncodedMiddleware(app)
    setupCookieParser(app)
    addLoginMiddleware(app, configuration)
    addStaticPaths(app, configuration)
    initCacheClient(app, configuration)
    mapRoutes(app)
    addFourOhFourHandler(app)
    addErrorHandler(app)
}