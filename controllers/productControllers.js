const productos = [
      { id: 1, nombre: "Notebook", precio: 1200 },
      { id: 2, nombre: "Mouse", precio: 20 },
      { id: 3, nombre: "Teclado", precio: 45 }

    ];

module.exports = {
    productsList: ( req, res ) => { // mi controlador es product list, cuando el usuario entre a la ruta
    res.render("productsList", {productos, titulo:"productos"}); // le paso dos variables: la vista que tiene que renderizar es home, pero le pasamos productos, la variable con la información del array y el título de productList.ejs
}

};