import { TodosCache } from '../../../../middlewares/todoMiddleware/cache'
import { express, uuid } from '../../dependencies'
import { Todo } from '../../types'

const router = express.Router()

router.post('/add', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const username = req.cookies['username']
    if (!username) {
        return res.send([])
    }
    const todos = TodosCache.get<Todo[]>(username)
    if (!todos) {
        TodosCache.set<Todo[]>(username, [{id: uuid.v4(), todo: req.body.todo}])
    } else {
        todos.push({id: uuid.v4(), todo: req.body.todo})
        TodosCache.set<Todo[]>(username, todos)
    }
    return res.send(TodosCache.get(req.body.username))
})

router.post('/get', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({todos: TodosCache.get(req.body.username)})
})

router.post('/remove', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const todos = TodosCache.get<Todo[]>(req.body.username)
    if (todos) {
        todos.splice(todos.findIndex(x => x.id = req.body.todoId), 1)
        TodosCache.set<Todo[]>(req.body.username, todos)
    }
    res.send({todos: TodosCache.get(req.body.username)})
})

export {
    router as todosRoute
}