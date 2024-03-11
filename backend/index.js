// import { PORT, mongoDBURL } from "./config.js";
import express from 'express'
import mongoose from "mongoose";
import { Note } from "./models/noteModel.js";
import router from "./routes/notesRoute.js";
import cors from "cors";
import dotenv from 'dotenv';


dotenv.config();
const PORT = process.env.PORT
const mongoDBURL = process.env.mongoDBURL
const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("mern stack")
})

app.use(cors());
app.use('/notes', router)

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("app is listening port:", PORT)
        app.listen(PORT, () => {
            console.log("app running on port:", PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })