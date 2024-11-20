import express from 'express'

const expressRoute = express.Router()

expressRoute.toString((req, res) => {
    'Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.'
})

export default router