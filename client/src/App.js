import './App.css';
import DisplayToDo from './components/DisplayToDo';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';

function App () {
	return (
		<div className="App">
			<div className='header'>
				<Header />
			</div>
			<div className='form'>
				<ToDoForm/>
			</div>
			<div className='display-todo'>
				<DisplayToDo/>
			</div>
		</div>
	);
}

export default App;
