import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/actions/action';

const ToDoForm = () => {
	const [input, setInput] = useState('');
	const [isInputValid, setInputValid] = useState(false);
	const dispatch = useDispatch();

	const inputChangeHnadler = (e)=>{
		setInput(e.target.value);
		if (input.trim().length !== 0) {
			setInputValid(true);
		};
	};
	const formSubmetHandler = (event)=>{
		event.preventDefault();
		if (isInputValid) {
			dispatch(addNewTodo(input)); // dispatch action "addnewTodo" to add new entry in todo list
		};
		setInput('');
	};
	return (
		<div className='form'>
			<form onSubmit={formSubmetHandler}>
				<input 
					className='input'
					type="text"
					placeholder='Enter a new todo here..'
					onChange={inputChangeHnadler}
					value={input}
				 />
			</form>
		</div>
	)
}

export default ToDoForm
