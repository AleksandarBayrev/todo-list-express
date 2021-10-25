import { express } from '../dependencies'
import { indexRoute, timeRoute, cacheTestRoute, userRoute } from '../routes'

export const mapRoutes = (app: express.Application) => {
    app.use('/', indexRoute)
    app.use('/cachetest', cacheTestRoute)
    app.use('/time', timeRoute)
    app.use('/user', userRoute)
}