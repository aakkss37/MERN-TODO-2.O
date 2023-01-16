import express, { application } from "express";
import bodyParser from "body-parser";
import cors from "cors";


// APP CONFIGURATION 
const app = express();
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
// app.use(cors);



// DATABASE CONNECTION
import mongooseConnention from "./database/todoDatabase.js";
mongooseConnention();



// ROUTES
import route from "./router/router.js";
app.use('/', route);



// PORT LISTENING
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
	console.log(`App is running on port ---> ${PORT}`);
})