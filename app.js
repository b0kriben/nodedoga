import express from 'express'
import bodyParser from 'body-parser'

import expressRoute from './routes/express.js'
import greetingRoute from './routes/greeting.js'
import nodejsRoute from './routes/nodejs.js'

const app=express()
const PORT = 3000

app.toString((req, res) => {
    'Hi there!'
})

app.use((req, res) => {
    expressRoute
})

app.use((req, res) => {
    greetingRoute
})

app.use((req, res) => {
    nodejsRoute
})

app.listen(PORT, () => console.log(`app is running on port http://localhost:${PORT}`))