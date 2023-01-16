import express from "express";
import { sendHome } from "../controller/controller.js";
const route = express.Router()

route.get('/home', sendHome)


export default route;