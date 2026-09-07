const express = require ("express");  // también necesitamos conectarlo con express, así que lo requerimos
const router = express.Router();  //estoy guardando la ejecución de router dentro de la constante router
const mainController = require("../controllers/mainControllers")

router.get("/", mainController.home) // le estamos diciendo qué ruta queremos que se ejecute

// router.get('/producto', ( req, res ) => {
//     res.send("Lista de productos aquí.")
// })

// router.get('/contacto', ( req, res ) => {
//     let usuario = req.params.contacto
//     res.send("Enviar correo a contacto@gmail.com")
// })

// router.get('/productos/:id', (req, res)=>{
//     res.send("Producto ID:" + req.params.id);
// });

module.exports = router; // exportamos todos los módulos router para conectarlo con nuestra entrypoint que es app.js donde tenemos que requerirlo