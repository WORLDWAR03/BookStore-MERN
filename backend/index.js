import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors'

const app = express();
//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//OPtion 1 : Allow All Origins With Default of Cors(*)
app.use(cors());

// app.use(
//     cors({
//         origin: 'http://localhost:4444',
//         methods:['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// )


app.get('/', (req,res)=>{
    console.log(req);
  return res.status(234).send('welcome here')
})

app.use('/books', booksRoute)


mongoose.connect(mongoDBURL)
.then(()=>{
console.log(('App connected to database'));
app.listen(PORT, ()=>{
    console.log(`Server is running to Port:${PORT}`);
});
})
.catch((error)=>{
    console.log(error);
}); 





















