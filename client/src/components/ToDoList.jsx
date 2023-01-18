import React from 'react'
// import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions/action.js';

const ToDoList = (props) => {
	const dispatch = useDispatch();
	const toggelTodoHandler = ()=>{
		dispatch(toggleTodo(props._id));
	}
	const deleteItemHandler = ()=>{
		dispatch(deleteTodo(props._id));
	}
	const className = `data ${props.done && "done"}`;
	return (
		<div className="todoData">
			<div className={className} onClick={toggelTodoHandler}>
			<p>{props.data}</p>
			</div>
			<div className='action'>
				<span className='icon'>
					<i className='fas fa-pen' />
				</span>
				<span className='icon'>
					<i className='fas fa-trash' onClick={deleteItemHandler}/>
				</span>
			</div>
		</div>
	)
}

export default ToDoList
