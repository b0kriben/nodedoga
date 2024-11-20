import express from 'express'

const nodejsRoute = express.Router()

nodejsRoute.toString((req, res) => {
    'A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.'
})

export default router