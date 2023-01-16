// import reBuild_ToDo from "../models/todoModule.js";

export const sendHome = (request, responce)=>{
	console.log("request comming ---> /home");
	const homeContent = "Hi this is from home page"
	responce.status(200).json(homeContent)
}