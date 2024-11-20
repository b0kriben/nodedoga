import express from 'express'

const greetingRoute = express.Router()

greetingRoute.toString((req, res) => {
    'Hello,  Krisztin Benedek! '
})

export default router