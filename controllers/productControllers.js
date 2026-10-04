const productModel = require("../models/productModel");

module.exports = {
    productsList: (req, res) => { // mi 
        const products = productModel.read();
        res.render("productsList", { products, title: "productos" });
    },
    productDetail: (req, res) => {
        let id = req.params.id
        const products = productModel.read(); // error encontrado
        let product = products.find(producto => producto.id == id)
        res.render("productDetail", { title: "Detalle del producto", product })
    },

    productForm: (req, res) => {
        res.render("productForm", { title: "Nuevo producto" })
    },

    newProduct: (req, res) => { // la función que procesa los datos
        const products = productModel.read();  //primero tengo que leer el archivo de productos
        const newProduct = {
            id: Date.now(),
            nombre: req.body.name,
            categoria: req.body.category,
            descripcion: req.body.description,
            precio: Number(req.body.price),
            stock: Number(req.body.stock),
            disponible: req.body.available === "on"
        }
        products.push(newProduct)
        productModel.write(products) // ahora guardamos el objeto en el disco correctamente.. es decir convertimos nuestro javascript a texto plano json para que lo lea FS
        res.redirect('/products');
    }
}

