import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';

//creating the express app
const app = express();

//exposing the environment variables
dotenv.config()

//database connection
mongoose.connect(process.env.MONGODB_CONNECTION_URL)
.then(()=> console.log("Database connection established")
.catch(e=> console.Console.log(e.message)))

//port configuration

const port = Number(process.env.PORT) || 5000

//middlewares
app.use(morgan('tiny'));
app.use(express.json());