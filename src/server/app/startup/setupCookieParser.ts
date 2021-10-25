import { cookieParser, express } from '../dependencies';

export const setupCookieParser = (app: express.Application) => {
    app.use(cookieParser())
}