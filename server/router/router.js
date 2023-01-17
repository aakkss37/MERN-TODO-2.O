import express from "express";
import { getAllTodo, addNewTodo } from "../controller/controller.js";
const route = express.Router()

route.get('/todo', getAllTodo);
route.post('/todo/post', addNewTodo);

export default route;