const express = require("express");
const router = express.Router();
const ArticuloControlador = require("../controladores/articulo")

//ruta de prueba
router.get("/ruta-de-prueba", ArticuloControlador.prueba )
router.get("/curso",ArticuloControlador.curso)

//Ruta Util
router.post("/crear", ArticuloControlador.crear)





module.exports = router;
