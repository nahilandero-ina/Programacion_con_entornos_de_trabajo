const usuarios = [  // es nuestra pseudo basededatos por ahora
      { id: 1, nombre: "Luciana ", precio: 1000 },
      { id: 2, nombre: "Isabella", precio: 2000 },
      { id: 3, nombre: "Ana", precio: 400 }

    ];

module.exports = {
    usersList: ( req, res ) => { // mi controlador es user list, cuando el usuario entre a la ruta
    res.render("usersList", {usuarios, title: "usuarios" }); // le paso dos variables: la vista que tiene que renderizar es home, pero le pasamos usuarios, la variable con la información del array y el título de usersList.ejs
},
usersList: ( req, res ) => {
    let id = req.params.id
    let user = usuarios.find(usuario => usuario.id == id)
    res.render("usersList", {title: "Detalle del usuario", user })
}
}


