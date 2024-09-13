const express = require('express');
const router = express.Router();
const juegoController= require('../controllers/juegoController');

/* crear las rutas , divisiones , ruta, funcionalidad  */
router.get('/juego',juegoController.obtenerjuego);

router.post('/juego',juegoController.crearjuego);

 router.put('/juego/:id', juegoController.updatejuego);

router.delete('/juego/:id',juegoController.deletejuego); 


router.get('/juego/:id/sumaPuntajes', juegoController.sumadePuntajes);

/* exportamos las rutas */
module.exports = router;

