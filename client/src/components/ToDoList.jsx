import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions/action.js';

const ToDoList = (props) => {
	const [editing, setEditing] = useState(false);
	const [editedInput, setEditedInput] = useState(props.data);
	const dispatch = useDispatch();

	const editFormSubmitHandler = () => { };
	const editedInputChangeHandler = () => { };
	const editTodoHandler = () => {
		setEditing(!editing);
	}

	const toggelTodoHandler = () => {
		dispatch(toggleTodo(props._id));
	}


	const deleteItemHandler = () => {
		dispatch(deleteTodo(props._id));
	}

	const editForm = (
		<form onSubmit={editFormSubmitHandler}>
			<input
				type="text"
				value={editedInput}
				onChange={editedInputChangeHandler}
			/>
		</form>
	)

	const className = `data ${props.done && "done"}`;
	return (
		<div className="todoData">
			<div className={className} onClick={toggelTodoHandler}>
				{
					editing ? editForm : <p>{props.data}</p>
				}
			</div>
			<div className='action'>
				<span className='icon'>
					<i className='fas fa-pen' onClick={editTodoHandler} />
				</span>
				<span className='icon'>
					<i className='fas fa-trash' onClick={deleteItemHandler} />
				</span>
			</div>
		</div>
	)
}

export default ToDoList
