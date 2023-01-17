import React from 'react'

const ToDoList = (props) => {
	return (
		<div className='todoData'>
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
