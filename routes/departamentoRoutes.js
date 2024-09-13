/* Rutas */
const express = require('express');
const router = express.Router();
const departamentoController= require('../controllers/departamentoController');

/* crear las rutas , divisiones , ruta, funcionalidad  */
router.get('/departamentos',departamentoController.obtenerDpto);

router.post('/departamentos',departamentoController.crearDpto);

router.put('/departamentos/:id',departamentoController.updateDpto);

router.delete('/departamentos/:id',departamentoController.deleteDpto);

/* exportamos las rutas */
module.exports = router;

