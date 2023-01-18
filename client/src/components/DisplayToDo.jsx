import React, { useEffect } from 'react'
import ToDoList from './ToDoList';
import {useDispatch, useSelector} from 'react-redux';
import { getAllTodo } from '../redux/actions/action';


const DisplayToDo = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTodo())
	}, [dispatch]);

	const allToDo = useSelector(state=>state.todos)
	// console.log("all todo ----> ", allToDo)
	const todoList = allToDo.map((todo)=>(
		<ToDoList
			key={todo._id}
			_id={todo._id}
			data={todo.data}
			createdAt={todo.createdAt}
			done={todo.done}
		/>
	));
	return (
		<div className='todoList'>
			{todoList}
		</div>
	)
}

export default DisplayToDo
