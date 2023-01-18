import ToDo from "../models/todoModule.js";
import { v4 as uuidv4 } from 'uuid';


export const getAllTodo = async (request, responce) => {
	// console.log("request received ---> /todo");
	try {
		const allTodo = await ToDo.find({}).sort({"crreatedAt": -1});
		return responce.status(200).json(allTodo)
	} catch (error) {
		console.log("error in fatching allTodo ----> ", error.message);
		return responce.status(500).json(error.message);
	};
}


export const addNewTodo = async(request, responce)=>{
	// console.log("request received ---> /todo/post" );
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


export const toggleTodo = async (request, responce)=>{
	// console.log("request received ---> /todo/:id/toggle ");
	try {
		const foundItem = await ToDo.findById(request.params.id);
		// console.log("before--> done: ", foundItem.done);
		const updatedItem = await ToDo.findOneAndUpdate({_id: request.params.id}, {done: !foundItem.done});
		await updatedItem.save();
		const newUpdatedItem = await ToDo.findById(request.params.id);
		// console.log("after --> done: ", newUpdatedItem.done);
		return responce.status(200).json(newUpdatedItem);
	} catch (error) {
		console.log("error in toggle done: true/false ----> ", error.message);
		return responce.status(500).json(error.message);
	}
}


export const deleteTodo = async(request, responce)=>{
	// console.log("request received ---> /todo/:id/delete" );
	try {
		await ToDo.deleteOne({_id: request.params.id});
		const newList = await ToDo.find({}).sort({ "crreatedAt": -1 });
		responce.status(200).json(newList);
	} catch (error) {
		console.log("error in delete item ----> ", error.message);
		return responce.status(500).json(error.message);
	}
}


// export const updateTodo = async(request, responce)=>{
// 	console.log("request received ---> /todo/:id/update");
// 	try {
// 		const updateItem = await ToDo.findByIdAndUpdate(
// 			{_id: request.param.id},
// 			{data: request.body.data}	
// 		);
// 		console.log("before ---> ", updateItem.data);
// 		await updateItem.save();
// 		const updatedItem = await ToDo.findById(request.params.id);
// 		return responce.status(200).json(updatedItem);
// 	} catch (error) {
// 		console.log("error in updating todo ----> ", error.message);
// 		return responce.status(500).json(error.message);
// 	}
// }

