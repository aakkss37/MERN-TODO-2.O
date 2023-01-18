import React from 'react'
// import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions/action.js';

const ToDoList = (props) => {
	const dispatch = useDispatch();
	const toggelTodoHandler = ()=>{
		dispatch(toggleTodo(props._id));
	}

	const className = `todoData ${props.done && "done"}`;
	return (
		<div className={className} onClick={toggelTodoHandler}>
			<p>{props.data}</p>
			<div className='action'>
				<span className='icon'>
					<i className='fas fa-pen' />
				</span>
				<span className='icon'>
					<i className='fas fa-trash' />
				</span>
			</div>
		</div>
	)
}

export default ToDoList
