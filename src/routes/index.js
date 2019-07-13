const express = require('express')

const userRoute = require('./user')
const postRoute = require('./post')

//criar uma rota
const router = express.Router()

router.use('/user', userRoute)
router.use('/post', postRoute)

module.exports = router
