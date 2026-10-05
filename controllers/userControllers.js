const registerModel = require("../models/registerModel");

module.exports = {
    usersList: (req, res) => {
        const users = registerModel.read();
        res.render("usersList", { users, title: "Usuarios" });
    },
    userForm: (req, res) => {
        res.render("userForm", { title: "Nuevo usuario" })
    },
    userDetail: (req, res) => {
        let id = req.params.id
        const users = registerModel.read();
        let user = users.find(usuario => usuario.id == id)
        res.render("userDetail", { title: "Detalle del usuario", user })
    },
    newUser: (req, res) => {
        const users = registerModel.read();
        const newUser = {
            id: Date.now(),
            nombre: req.body.name,
            correo: req.body.email
        };
        users.push(newUser);
        registerModel.write(users);
        res.redirect("/users");
    },
    editForm: (req, res) => {
        const users = registerModel.read();
        let id = req.params.id
        let user = users.find(usuario => usuario.id == id)
        res.render("userEdit", { title: "Editar usuario", user });
    },
    editUser: (req, res) => {
        let users = registerModel.read();
        users = users.map(user =>
            user.id == req.params.id ? {
                ...user, 
                nombre: req.body.name,
                correo: req.body.email,
                } : user
        );
        registerModel.write(users);
        res.redirect("/users");
    },
    deleteUser: (req, res) => {
            let users = registerModel.read();
            let id = req.params.id;
            users = users.filter(user => user.id != id)
            registerModel.write(users);
            res.redirect("/users");
        }

}


