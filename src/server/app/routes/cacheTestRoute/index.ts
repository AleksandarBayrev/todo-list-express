import { CacheServerClient } from '../../../../cacheServerClient'
import { appConfig } from '../../app.config'
import { express } from '../../dependencies'

const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        res.contentType(appConfig.contentType).send(await CacheServerClient.get(req.query.itemKey as string))

    } catch(err) {
        res.contentType(appConfig.contentType).send(err)
    }
})

export {
    router as cacheTestRoute
}