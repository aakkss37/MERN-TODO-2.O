import React from 'react'
import ToDoList from './ToDoList';

const todoArr = [
	{
		_id:"skajhdxi827323hei7hd2189dy98d4r",
		data: "Task 1",
		createdAt: Date.now(),
		done: false
	},
	{
		_id:"skajhdxi827323hei7hd21efh834fr",
		data: "Task 2",
		createdAt: Date.now(),
		done: false
	},
	{
		_id:"skajhdxi827323hei7hd21i3u4fdf3",
		data: "Task 3",
		createdAt: Date.now(),
		done: false
	},
	{
		_id:"skajhdxi827323hei7hd3fcj938434j",
		data: "Task 4",
		createdAt: Date.now(),
		done: false
	},
]
const DisplayToDo = () => {
	const allToDo = todoArr.map((todo)=>(
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
			{allToDo}
		</div>
	)
}

export default DisplayToDo
