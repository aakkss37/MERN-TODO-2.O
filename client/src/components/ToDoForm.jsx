import React from 'react'

const ToDoForm = () => {
	const inputChangeHnadler = ()=>{};
	const formSubmetHandler = ()=>{};
	return (
		<div className='form'>
			<form onSubmit={formSubmetHandler}>
				<input 
					className='input'
					type="text"
					placeholder='Enter a new todo here..'
					onChange={inputChangeHnadler}
				 />
			</form>
		</div>
	)
}

export default ToDoForm
