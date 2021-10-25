import { express } from '../dependencies'

export const addUrlEncodedMiddleware = (app: express.Application) => {
    app.use(express.urlencoded({ extended: false }))
}