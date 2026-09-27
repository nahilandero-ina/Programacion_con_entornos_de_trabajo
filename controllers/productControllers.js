// const productos = [  // es nuestra pseudo basededatos por ahora
//       { id: 1, nombre: "Planta ", precio: 1000 },
//       { id: 2, nombre: "Tierra", precio: 2000 },
//       { id: 3, nombre: "Semilla", precio: 400 }

//     ];

const productModel = require("../models/productModel"); // requerimos fs que tiene las dos funciones que leen y escriben 

module.exports = {
    productsList: ( req, res ) => { // mi controlador es product list, cuando el usuario entre a la ruta
    const products = productModel.read();
        res.render("productsList", {products, title: "productos" }); // le paso dos variables: la vista que tiene que renderizar es home, pero le pasamos productos, la variable con la información del array y el título de productList.ejs
},
productDetail: ( req, res ) => {
    let id = req.params.id
    let product = products.find(producto => producto.id == id)
    res.render("productDetail", {title: "Detalle del producto", product })
},

}