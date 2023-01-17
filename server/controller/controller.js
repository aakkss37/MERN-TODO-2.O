// import reBuild_ToDo from "../models/todoModule.js";
const todoArr = [
	{
		_id: "skajhdxi827323hei7hd2189dy98d4r",
		data: "Task 1",
		createdAt: Date.now(),
		done: false
	},
	{
		_id: "skajhdxi827323hei7hd21efh834fr",
		data: "Task 2",
		createdAt: Date.now(),
		done: false
	},
	{
		_id: "skajhdxi827323hei7hd21i3u4fdf3",
		data: "Task 3",
		createdAt: Date.now(),
		done: false
	},
	{
		_id: "skajhdxi827323hei7hd3fcj938434j",
		data: "Task 4",
		createdAt: Date.now(),
		done: false
	},
]
export const sendHome = (request, responce)=>{
	console.log("request comming ---> /home");
	// const homeContent = "Hi this is from home page"
	responce.status(200).json(todoArr)
}