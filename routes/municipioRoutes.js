/* Rutas */
const express = require('express');
const router = express.Router();
const municipioController= require('../controllers/municipioController');

/* crear las rutas , divisiones , ruta, funcionalidad  */
router.get('/municipios',municipioController.obtenerMunic)




/* exportamos las rutas */
module.exports = router;