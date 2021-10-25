import { express } from '../dependencies'
import { indexRoute } from '../routes'

export const mapRoutes = (app: express.Application) => {
    app.use('/', indexRoute)
}