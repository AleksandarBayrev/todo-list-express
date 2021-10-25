import { express } from '../dependencies'
import { indexRoute, timeRoute, cacheTestRoute } from '../routes'

export const mapRoutes = (app: express.Application) => {
    app.use('/', indexRoute)
    app.use('/cachetest', cacheTestRoute)
    app.use('/time', timeRoute)
}