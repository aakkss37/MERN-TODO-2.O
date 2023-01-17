import ToDo from "../models/todoModule.js";
import { v4 as uuidv4 } from 'uuid';

export const getAllTodo = async (request, responce) => {
	console.log("request received ---> /todo");
	try {
		const allTodo = await ToDo.find({}).sort({"crreatedAt": -1});
		return responce.status(200).json(allTodo)
	} catch (error) {
		console.log("error in fatching allTodo ----> ", error.message);
		return responce.status(500).json(error.message);
	};
}

export const addNewTodo = async(request, responce)=>{
	console.log("request received ---> /todo/post" );
	try {
		const newTodo = await ToDo.create({
			_id: uuidv4(),
			data: request.body.data,
			crreatedAt: Date.now(),
			done: false
		});
		await newTodo.save();
		return responce.status(200).json(newTodo);
	} catch (error) {
		console.log("error in adding newTodo ----> ", error.message);
		return responce.status(500).json(error.message);
	}
}