import { express } from '../../dependencies'
const router = express.Router()
import { appConfig } from '../../app.config';
import { cacheInstance } from '../../cacheInstance';
import { AvailableRoutes } from '../../app.constants';
import { buildCountResponse, buildDeleteResponse, buildGetResponse } from '../../helpers';


router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.contentType(appConfig.contentType).send(AvailableRoutes)
})

router.post('/add', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  cacheInstance.set(req.body.itemKey, JSON.stringify(req.body.itemData), req.body.ttl || appConfig.cacheDefaults.stdTTL)
  res.contentType(appConfig.contentType).send(buildGetResponse(req.body.itemKey, cacheInstance))
})

router.get('/get', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.contentType(appConfig.contentType).send(buildGetResponse(req.query.itemKey as string, cacheInstance))
})

router.get('/count', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.contentType(appConfig.contentType).send(buildCountResponse(cacheInstance))
})

router.get('/remove', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const deletedItem = cacheInstance.get(req.query.itemKey as string);
  res.contentType(appConfig.contentType).send(buildDeleteResponse(req.query.itemKey as string, deletedItem as object, cacheInstance))
})

export {
  router as indexRoute
}
