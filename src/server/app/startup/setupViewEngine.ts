import { VIEWS_FOLDER, VIEW_ENGINE } from '../app.constants'
import { adaro, express } from '../dependencies'
import { IApplicationConfiguration } from '../types'

export const setupViewEngine = (app: express.Application, configuration: IApplicationConfiguration) => {
    app.engine(VIEW_ENGINE, adaro.dust({
        helpers: ['dustjs-helpers']
    }))
    app.set(VIEWS_FOLDER, configuration.viewsPath)
    app.set('view engine', VIEW_ENGINE)
}