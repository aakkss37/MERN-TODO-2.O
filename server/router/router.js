import express from "express";
import { getAllTodo } from "../controller/controller.js";
const route = express.Router()

route.get('/todo', getAllTodo)


export default route;