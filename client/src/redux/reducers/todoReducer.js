import * as dispatchActionType from "../actions/dispatchType.js";

export const todosReducer = (state = [], action) => {
	// console.log("todoReducer call------->" ,action);
	switch (action.type) {


		case dispatchActionType.Get_All_Todo:
			// console.log("todoReducer call-------> ", action.type);
			return action.payload;
		

		case dispatchActionType.Add_New_Todo:
			// console.log("todoReducer call------>", action.type);
			return [action.payload, ...state];


		case dispatchActionType.Toggle_Todo:
			// console.log("todoReducer call action type------>", action.type);
			// console.log("todoReducer call action payload------>", action.payload);
			const updatedState = state.map((todo)=>(
				todo._id === action.payload._id ? {...todo, done: !todo.done} : todo
			));
			// console.log("updatedTodo -----> ", updatedState);
			return updatedState;


		case dispatchActionType.Delete_Todo:
			// console.log("todoReducer call action type------>", action.type);
			// console.log("todoReducer call action payload------>", action.payload);
			return action.payload;


		case dispatchActionType.Update_Todo:
			// console.log("todoReducer call action type------>", action.type);
			// console.log("todoReducer call action payload------>", action.payload);
			const newState = state.map((todo)=>(
				todo._id === action.payload._id ? {...todo, data: action.payload.data} : todo
			))
			return newState;


		default:
			return state;

	}
}