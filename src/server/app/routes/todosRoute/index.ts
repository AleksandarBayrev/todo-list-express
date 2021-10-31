import { TodosCache } from '../../../../middlewares/todoMiddleware/cache'
import { express } from '../../dependencies'

const router = express.Router()

router.post('/add', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const username = req.cookies['username']
    if (!username) {
        return res.send([])
    }
    const todos = TodosCache.get<string[]>(username)
    if (!todos) {
        TodosCache.set(username, [req.body.todo])
    } else {
        todos.push(req.body.todo)
        TodosCache.set(username, todos)
    }
    return res.send(TodosCache.get(req.body.username))
})


router.post('/get', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({todos: TodosCache.get(req.body.username)})
})

export {
    router as todosRoute
}