import { express } from '../../dependencies'

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({time: new Date().toISOString()})
})

export {
    router as timeRoute
}