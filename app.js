// app.js es mi entrypoint
const express = require ("express");
const app = express()
const mainRoutes = require ("./routes/mainRoutes");                             // con esta línea de código estamos conectando/modularizando y poniendo disponible las rutas del main  en nuestro entrypoint
const productRoutes = require("./routes/productRoutes");

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");


app.use("/", mainRoutes)                                                                    // queremos que nuestra app utilice (use) en nuestro inicio/home las rutas disponibes en el archivo mainRoutes.js
app.use("/products", productRoutes)


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);    
})



