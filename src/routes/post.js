const express = require('express')

const postController = require('../controller/post')

//lá exportamos sequelize e os modelos
const model = require('../models/index')

//criar uma rota
const router = express.Router()

router.get('/', postController.createForm)
router.post('/', postController.createProcess.bind(null, model.models))

module.exports = router