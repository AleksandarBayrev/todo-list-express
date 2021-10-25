import { loginMiddleware } from '../../../middlewares/loginMiddleware'
import { express } from '../dependencies'
import { IApplicationConfiguration } from '../types'

export const addLoginMiddleware = (app: express.Application, config: IApplicationConfiguration) => {
    app.use(loginMiddleware)
}