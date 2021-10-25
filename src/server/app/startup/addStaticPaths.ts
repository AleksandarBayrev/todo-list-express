import { path, express } from '../dependencies'
import { IApplicationConfiguration } from '../types'

export const addStaticPaths = (app: express.Application, configuration: IApplicationConfiguration) => {
    app.use(express.static(configuration.publicStaticRoutePath))
}