const express = require ("express");  // también necesitamos conectarlo con express, así que lo requerimos
const router = express.Router();  //estoy guardando la ejecución de router dentro de la constante router
const productControllers = require("../controllers/productControllers");

router.get("/", productControllers.productsList) // le estamos diciendo qué ruta queremos que se ejecute
router.get("/detail/:id", productControllers.productDetail) 

module.exports = router; 