const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../data/products.json")

function read() {  // la función para convertir el texto plano a una estructura nativa de javascript
    return JSON.parse(fs.readFileSync(file, "utf8"))
}

function write(data) { // la función para guardar datos en el disco, convierte javascript a cadena de txt plano json
    fs.writeFileSync(file, JSON.stringify(data, null, 2))
}

module.exports = {read, write};