import { express } from '../dependencies'
import { IApplicationConfiguration } from '../types'

export const addJson = (app: express.Application, config: IApplicationConfiguration) => {
    app.use(express.json({limit: config.bodyLimit}))
}