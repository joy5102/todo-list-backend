const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require("./routes/ToDoRoute");

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001

mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("Connected to MongoDB..."))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
