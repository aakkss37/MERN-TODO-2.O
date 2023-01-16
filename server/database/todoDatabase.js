// ENVIORNMENT VARIABLE
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



// DATABASE CONNECTION
import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const mongooseConnention = async()=>{

	const CONNECTION_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-to-do.oro2wus.mongodb.net/?retryWrites=true&w=majority/`;
	const connectionOptions = {
		useNewUrlParser: true, useUnifiedTopology: true
	}
	mongoose.connect(CONNECTION_URL, connectionOptions);

	mongoose.connection.on('connected',()=>{
		console.log('Database: ---> "connectied"');
	});
	mongoose.connection.on('disconnected', ()=>{
		console.log('Database:---> "disconnected"');
	});
	mongoose.connection.on('error', console.error.bind(console, "connection error"));
}

export default mongooseConnention;