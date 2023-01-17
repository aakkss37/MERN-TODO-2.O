import * as dispatchActionType from "../actions/dispatchType.js";

export const todosReducer = (state = [], action) => {
	console.log("todoReducer call------->" ,action);
	switch (action.type) {
		case dispatchActionType.Get_All_Todo:
			console.log("todoReducer call-------> ", action.type);
			return action.payload;
		default:
			return state;
	}
}