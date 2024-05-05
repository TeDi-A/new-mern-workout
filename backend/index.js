require('dotenv').config()
const express = require('express')

const app = express()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

app.use(express.static(__dirname + "/dist"))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Listening on port ' + PORT)
        })
    })
    .catch(error => {
        console.log(error)
    })

const PORT = process.env.PORT