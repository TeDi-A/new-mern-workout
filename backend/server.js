require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


app.use(cors(
    {
    // origin: ['http://localhost:4000/api/workouts'],
    origin: ['https://new-mern-app-backend.vercel.app/'],
    methods: ['POST', 'GET'],
    credentials: true
    }
));
 
//Middleware 
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.json("Welcome")
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
