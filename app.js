const express = require ("express");
const app = express()
const mainRoutes = require ("./routes/mainRoutes");                             // con esta línea de código estamos conectando/modularizando y poniendo disponible las rutas del main  en nuestro entrypoint
const productRoutes = require("./routes/productRoutes");

const methodOverride = require("method-override");

const PORT = 3000;

app.use(express.urlencoded({extended:true}))

app.use(methodOverride("_method"));         

app.set("view engine", "ejs");
app.set("views", "./views");


app.use("/", mainRoutes)                                                                    // queremos que nuestra app utilice (use) en nuestro inicio/home las rutas disponibes en el archivo mainRoutes.js
app.use("/products", productRoutes)


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);    
})



