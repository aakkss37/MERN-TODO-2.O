import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	data: {
		type: String,
		required: true
	},
	done: {
		type: Boolean,
		defaule: false
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},

});


const ToDo = mongoose.model("ToDo",TodoSchema);
export default ToDo;