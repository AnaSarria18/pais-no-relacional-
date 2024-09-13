/* Rutas */
const express = require('express');
const router = express.Router();
const municipioController= require('../controllers/municipioController');

/* crear las rutas , divisiones , ruta, funcionalidad  */
router.get('/municipios',municipioController.obtenerMunicip);

router.post('/municipios',municipioController.crearMunicip);

router.put('/municipios/:id',municipioController.updateMunicip);

router.delete('/municipios/:id',municipioController.deleteMunicip);


/* exportamos las rutas */
module.exports = router;