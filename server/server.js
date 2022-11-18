const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const connectDB = require('./db/connect');
require('dotenv').config();

const formRouter = require('./routes/post');
app.use('/form', formRouter);



const start = async() => {
    await connectDB(process.env.URL);
    app.listen(8000, () => {
        console.log("Up")
    })
}

start()
