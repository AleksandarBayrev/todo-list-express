import { CacheServerClient } from '../../../../cacheServerClient'
import { express, uuid } from '../../dependencies'
import { LoginStatus } from '../../types/LoginStatus'
const crypto = require('crypto')
const router = express.Router()

/* GET home page. */
router.post('/login', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const sessionId = uuid.v4()
    if (req.body.username && await CacheServerClient.get(`user-${req.body.username}`)) {
        req.cookies['sessionId'] = sessionId
        req.cookies['username'] = req.body.username
        const state: LoginStatus = { sessionId, status: true }
        try {
            await CacheServerClient.add(`login-${req.body.username}`, state)
        } catch(err) {
            return res.send(err)
        }
        req.loginStatus[sessionId] = state
        return res.send({ status: true, sessionId: uuid.v4(), username: req.body.username })
    }
    return res.send({status: false})
})

router.post('/logout', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const session = await CacheServerClient.get(`user-${req.body.username}`)
    if (session) {
        delete req.cookies['sessionId']
        delete req.cookies['username']
        await CacheServerClient.remove(`login-${req.body.username}`)
    }
    return res.send({status: session !== undefined, sessionId: req.body.sessionId})
})

router.post('/register', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const userId = uuid.v4()
    if (typeof await CacheServerClient.get(`user-${req.body.username}`) === 'undefined') {
        return res.send({status: false})
    }
    const newUser = {
        id: userId,
        username: req.body.username,
        password: crypto.createHash('sha1').update(req.body.password).digest('hex')
    }
    await CacheServerClient.add(`user-${req.body.username}`, JSON.stringify(newUser))
    return res.send({ status: typeof await CacheServerClient.get(`user-${req.body.username}`) !== 'undefined' ? 'OK' : 'ERROR', username: req.body.username, id: userId })
})

export {
    router as userRoute
}
