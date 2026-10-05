const productModel = require("../models/productModel");

module.exports = {
    productsList: (req, res) => { 
        const products = productModel.read();
        res.render("productsList", { products, title: "productos" });
    },
    productDetail: (req, res) => {
        let id = req.params.id
        const products = productModel.read(); 
        let product = products.find(producto => producto.id == id)
        res.render("productDetail", { title: "Detalle del producto", product })
    },

    productForm: (req, res) => {
        res.render("productForm", { title: "Nuevo producto" })
    },

    newProduct: (req, res) => { 
        const products = productModel.read();  
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
        productModel.write(products) 
        res.redirect('/products');
    },

    editForm: (req, res) => {
        const products = productModel.read();
        let id = req.params.id
        let product = products.find(producto => producto.id == id)
        res.render("productEdit", { title: "Editar producto", product });
    },

    editProduct: (req, res) => {
        let products = productModel.read();
        products = products.map(product =>
            product.id == req.params.id ? {
                ...product,
                nombre: req.body.name,
                categoria: req.body.category,
                descripcion: req.body.description,
                precio: Number(req.body.price),
                stock: Number(req.body.stock),
                disponible: req.body.available === "on"
            } : product
        );
        productModel.write(products);
        res.redirect("/products");
    },
    deleteProduct: (req, res) => {
        let products = productModel.read();
        let id = req.params.id;
        products = products.filter(product => product.id != id)
        productModel.write(products);
        res.redirect("/products");
    }
}

