const express = require ("express");
const app = express()
const mainRoutes = require ("./routes/mainRoutes");   
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const methodOverride = require("method-override");

const PORT = 3000;

app.use(express.urlencoded({extended:true}))

app.use(methodOverride("_method"));         

app.set("view engine", "ejs");
app.set("views", "./views");


app.use("/", mainRoutes)    
app.use("/products", productRoutes)
app.use("/users", userRoutes)


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);    
})



