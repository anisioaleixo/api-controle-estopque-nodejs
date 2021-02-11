const express = require('express')
const userController = require('./controller/userController')
const router = express.Router()

router
    .get('/users',userController.listUser)
    .post('/users',userController.addUser)
    .post('/users/active/:id',userController.ativarUsuario)
    .post('/users/inative/:id',userController.desativarUsuario)

module.exports = router