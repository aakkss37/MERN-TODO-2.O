import axios from 'axios';
import {Get_All_Todo} from './dispatchType.js'

const API_URL = "http://localhost:8000";
export const getAllTodo = (data) => async(dispatch)=>{
	try {
		const responce = await axios.get(`${API_URL}/todo`);
		console.log("getAllTodo ----> ",responce.data)
		dispatch({ type: Get_All_Todo, payload: responce.data })
	} catch (error) {
		console.log("Error while calling getAllTodo API ----> ", error.message);
	}
}