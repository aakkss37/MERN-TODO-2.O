import express from "express";
import { getAllTodo, addNewTodo, toggleTodo, deleteTodo} from "../controller/controller.js";
const route = express.Router()

route.get('/todo', getAllTodo);
route.post('/todo/post', addNewTodo);
route.put('/todo/:id/toggle', toggleTodo);
route.delete('/todo/:id/delete', deleteTodo);
// route.put('/todo/:id/update', updateTodo)

export default route;