const express = require ("express");  // también necesitamos conectarlo con express, así que lo requerimos
const router = express.Router();  //estoy guardando la ejecución de router dentro de la constante router
const mainController = require("../controllers/mainControllers")

router.get("/", mainController.home) // le estamos diciendo qué ruta queremos que se ejecute



module.exports = router; // exportamos todos los módulos router para conectarlo con nuestra entrypoint que es app.js donde tenemos que requerirlo