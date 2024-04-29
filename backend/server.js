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

app.use((req, res, next) => {
    next()
})

app.get('/', (req, res) => {
    res.json("Welcome")
})

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)

const PORT = process.env.PORT
app.listen(PORT, () => {
            console.log('Listening on port ' + PORT)
        })

