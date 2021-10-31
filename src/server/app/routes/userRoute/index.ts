import { CacheServerClient } from '../../../../cacheServerClient'
import { express, uuid } from '../../dependencies'
import { LoginStatus } from '../../types/LoginStatus'
const crypto = require('crypto')
const router = express.Router()

/* GET home page. */
router.post('/login', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionId = uuid.v4()
        if (!req.body.username || !req.body.password) {
            return res.status(500).send({ status: false, error: `Missing: username=${req.body.username} password=${req.body.password}`})
        }
        if (await CacheServerClient.get(`user-${req.body.username}`)) {
            req.cookies['sessionId'] = sessionId
            req.cookies['username'] = req.body.username
            const state: LoginStatus = { sessionId, status: true, username: req.body.username }
            await CacheServerClient.add(`login-${req.body.username}`, JSON.stringify(state))
            req.loginStatus[sessionId] = state
            return res.send({ ...state })
        }
        return res.send({ status: false })
    } catch (err) {
        return res.status(500).send({ status: false, error: JSON.stringify(err) })
    }
})

router.post('/logout', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const session = await CacheServerClient.get(`user-${req.body.username}`)
        if (session) {
            delete req.cookies['sessionId']
            delete req.cookies['username']
            await CacheServerClient.remove(`login-${req.body.username}`)
        }
        return res.send({ status: session !== undefined, sessionId: req.body.sessionId })
    } catch (err) {
        return res.status(500).send({ status: false, error: JSON.stringify(err) })
    }
})

router.post('/register', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const userId = uuid.v4()
        if (!req.body.username || !req.body.password) {
            return res.status(500).send({ status: false, error: `Missing: username=${req.body.username} password=${req.body.password}`})
        }
        if (typeof await CacheServerClient.get(`user-${req.body.username}`) === 'undefined') {
            return res.send({ status: false })
        }
        const newUser = {
            id: userId,
            username: req.body.username,
            password: req.body.password
        }
        await CacheServerClient.add(`user-${req.body.username}`, JSON.stringify(newUser))
        //console.log(await CacheServerClient.get(`user-${req.body.username}`))
        return res.send({ status: typeof await CacheServerClient.get(`user-${req.body.username}`) !== 'undefined' ? 'OK' : 'ERROR', username: req.body.username, id: userId })
    } catch (err) {
        return res.status(500).send({ status: false, error: JSON.stringify(err) })
    }
})

export {
    router as userRoute
}
