/* Rutas */
const express = require('express');
const router = express.Router();
const departamentoController= require('../controllers/departamentoController');

/* crear las rutas , divisiones , ruta, funcionalidad  */
router.get('/departamentos',departamentoController.obtenerDpto)

router.post('/departamentos',departamentoController.crearDpto)

/* exportamos las rutas */
module.exports = router;

