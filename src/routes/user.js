const express = require('express')

//lá exportamos sequelize e os modelos
const model = require('../models/index')

const userController = require('../controller/user')

//criar uma rota
const router = express.Router()

router.get('/', userController.createForm)
router.post('/', userController.createProcess.bind(null, model.models))//agora na função index, crio uma nova função injetando model

module.exports = router
