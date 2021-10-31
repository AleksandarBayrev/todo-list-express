import { loginMiddleware } from '../../../middlewares/loginMiddleware'
import { todoMiddleware } from '../../../middlewares/todoMiddleware'
import { express } from '../dependencies'
import { IApplicationConfiguration } from '../types'

export const addLoginMiddleware = (app: express.Application, config: IApplicationConfiguration) => {
    app.use(loginMiddleware)
    app.use(todoMiddleware)
}