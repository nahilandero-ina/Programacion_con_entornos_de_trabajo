module.exports = {
    home: (req, res) => {  // vamos a ir adicionando rutas (con su nombre) y en mainControllers .home (estamos diciendo qué función queremos que se ejecute:)
       res.render("home");  // Esto buscará views/home.ejs (estoy renderizando/mostrando una vista)
    }

}
