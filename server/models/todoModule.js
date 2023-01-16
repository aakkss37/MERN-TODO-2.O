import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			required: true,
		},
		data: {
			type: String,
			required: true
		},
		createdOn:{
			type: Date,
			default: Date.now(),
		},
		done:{
			Type: Boolean,
			default: false
		}
	}
)

const reBuild_ToDo = mongoose.model("rebuild_ToDo",TodoSchema);
export default reBuild_ToDo;