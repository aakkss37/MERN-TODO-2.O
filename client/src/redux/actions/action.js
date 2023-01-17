import axios from 'axios';
import {Add_New_Todo, Get_All_Todo} from './dispatchType.js'

const API_URL = "http://localhost:8000";
export const getAllTodo = () => async(dispatch)=>{
	console.log("action dispatch---> 'getAllTodo'");
	try {
		const responce = await axios.get(`${API_URL}/todo`);
		console.log("getAllTodo ----> ",responce.data)
		dispatch({ type: Get_All_Todo, payload: responce.data })
	} catch (error) {
		console.log("Error while calling getAllTodo API ----> ", error.message);
	}
}

export const addNewTodo = (newTodo)=> async(dispatch)=>{
	console.log("action dispatch --> addnewTodo ---> ", newTodo);
	try {
		const responce = await axios.post(`${API_URL}/todo/post`, {data: newTodo});
		dispatch({ type: Add_New_Todo, payload: responce.data})
	} catch (error) {
		console.log("Error while calling addTodo API ----> ", error.message)
	}
}