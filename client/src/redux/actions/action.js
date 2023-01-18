import axios from 'axios';
import {Add_New_Todo, Delete_Todo, Get_All_Todo, Toggle_Todo} from './dispatchType.js'

const API_URL = "http://localhost:8000";


export const getAllTodo = () => async(dispatch)=>{
	// console.log("action dispatch---> 'getAllTodo'");
	try {
		const responce = await axios.get(`${API_URL}/todo`);
		// console.log("getAllTodo ----> ",responce.data)
		dispatch({ type: Get_All_Todo, payload: responce.data })
	} catch (error) {
		console.log("Error while calling getAllTodo API ----> ", error.message);
	}
}


export const addNewTodo = (newTodo)=> async(dispatch)=>{
	// console.log("action dispatch --> addnewTodo ---> ", newTodo);
	try {
		const responce = await axios.post(`${API_URL}/todo/post`, {data: newTodo});
		dispatch({ type: Add_New_Todo, payload: responce.data})
	} catch (error) {
		console.log("Error while calling addTodo API ----> ", error.message)
	}
}


export const toggleTodo = (_id)=> async(dispatch)=>{
	// console.log("action dispatch --> toggle done: true/false ---> ");
	try {
		const responce = await axios.put(`${API_URL}/todo/${_id}/toggle`);
		// console.log("after toggle ---> ", responce.data);
		dispatch({type: Toggle_Todo, payload: responce.data});
	} catch (error) {
		console.log("Error while calling toggleTodo API ----> ", error.message)
	}
};


export const deleteTodo = (_id)=> async (dispatch)=>{
	// console.log("action dispatch --> toggle done: true/false ---> ");
	try {
		const responce = await axios.delete(`${API_URL}/todo/${_id}/delete`);
		// console.log("after delete ---> ", responce.data);
		dispatch({ type: Delete_Todo, payload: responce.data });
	} catch (error) {
		console.log("Error while calling deleteTodo API ----> ", error.message)
	}
};



export const updateTodo = ()=>{};