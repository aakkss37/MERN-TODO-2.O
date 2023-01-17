import './App.css';
import DisplayToDo from './components/DisplayToDo';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';

function App () {
	return (
		<div className="App">
			<div className='headerContainer'>
				<Header />
			</div>
			<div className='formConatiner'>
				<ToDoForm/>
			</div>
			<div className='todoContainer'>
				<DisplayToDo/>
			</div>
		</div>
	);
}

export default App;
