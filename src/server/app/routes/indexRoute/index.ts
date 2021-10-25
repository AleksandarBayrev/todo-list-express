import { appConfig } from '../../app.config'
import { express } from '../../dependencies'
import { buildRenderProps } from '../../helpers'
import { RenderProps } from '../../types'
const router = express.Router()

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const sessionId = req.cookies['sessionId']
  const loggedIn = sessionId && req.loginStatus[sessionId]?.status
  const renderOptions: RenderProps = {
    title: `${appConfig.applicationName} - Index`,
    header: appConfig.applicationName,
    footer: `Copyright (C) ${new Date().getFullYear()}`,
    css: appConfig.assets.css,
    loggedIn,
    js: appConfig.assets.js
  }
  res.render('index', buildRenderProps(renderOptions))
})

router.get('/todos', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const sessionId = req.cookies['sessionId']
  const loggedIn = sessionId && req.loginStatus[sessionId]?.status
  const renderOptions: RenderProps = {
    title: `${appConfig.applicationName} - Index`,
    header: appConfig.applicationName,
    footer: `Copyright (C) ${new Date().getFullYear()}`,
    css: appConfig.assets.css,
    loggedIn,
    js: appConfig.assets.js
  }
  res.render('todos', buildRenderProps(renderOptions))
})

export {
  router as indexRoute
}
