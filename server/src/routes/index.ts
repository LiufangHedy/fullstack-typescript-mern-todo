import { Router } from 'express'
import BodyParser from 'body-parser'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos'
 
const router: Router = Router()

router.get('/todos', getTodos)

router.post('/add-todo', BodyParser.json(), addTodo) // body-parser woks

router.put('/edit-todo/:id', BodyParser.json(), updateTodo)

router.delete('/delete-todo/:id', deleteTodo)

export default router
