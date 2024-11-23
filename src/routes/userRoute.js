//Importacion express
const express = require('express');
//Importacion de funcion Router
const router = express.Router();
//Importacion del controlador de user
const userController = require('../controllers/userController');

//Endpoitns
    //Ruta para registrar un nuevo usuario
router.post('/register', userController.register);
    //Ruta para loguearse con un usuario existente
router.post('/login', userController.login);
    //Ruta para actualizar los datos del usaurio
router.put('/update', userController.update);

//Exportacion de router
module.exports = router;