require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


app.use(cors(
    {
    origin: ['https://new-mern-workout-backend.vercel.app/'],
    methods: ['POST', 'GET'],
    credentials: true
    }
));
 
//Middleware 
app.use(express.json())

mongoose.connect(mongodb+srv://TeDi-A:raiden74739@mernpractice.oogylav.mongodb.net/?retryWrites=true&w=majority)

app.get('/', (req, res) => {
    res.json("Welcome")
})

app.use('/api/workouts', workoutRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
            console.log('Listening on port ' + PORT)
        })

