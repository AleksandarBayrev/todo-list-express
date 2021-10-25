import { appConfig } from './app.config'
import { express } from './dependencies'
import { startupConfiguration } from './startup'

const app = express()

startupConfiguration(app, appConfig)

export {
  app
}