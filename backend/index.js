import { PORT, mongoDBURL } from "./config.js";
import express from 'express'
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import router from "./routes/booksRoute.js";
import cors from "cors";

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("mern stack")
})

app.use(cors());
app.use('/books', router)

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