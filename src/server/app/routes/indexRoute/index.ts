import { appConfig } from '../../app.config'
import { express } from '../../dependencies'
import { buildRenderProps, getHostname } from '../../helpers'
import { RenderProps } from '../../types'
const router = express.Router()

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const sessionId = req.cookies['sessionId']
  console.log(req.loginStatus)
  const loggedIn = (sessionId && req.loginStatus[sessionId]?.status) || false
  console.log(req.loginStatus)
  console.log(sessionId)
  console.log(`LoggedIn: ${loggedIn}`)
  const renderOptions: RenderProps = {
    title: `${appConfig.applicationName} - Index`,
    header: appConfig.applicationName,
    footer: `Copyright (C) ${new Date().getFullYear()}`,
    css: appConfig.assets.css,
    loggedIn,
    js: appConfig.assets.js,
    hostUrl: getHostname(req)
  }
  res.render('index', buildRenderProps(renderOptions))
})

router.get('/todos', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const sessionId = req.cookies['sessionId']
  console.log(sessionId)
  const loggedIn = (sessionId && req.loginStatus[sessionId]?.status) || false
  console.log(`LoggedIn: ${loggedIn}`)
  const renderOptions: RenderProps = {
    title: `${appConfig.applicationName} - Index`,
    header: appConfig.applicationName,
    footer: `Copyright (C) ${new Date().getFullYear()}`,
    css: appConfig.assets.css,
    loggedIn: loggedIn.toString(),
    js: appConfig.assets.js,
    hostUrl: getHostname(req)
  }
  res.render('todos', buildRenderProps(renderOptions))
})

export {
  router as indexRoute
}
