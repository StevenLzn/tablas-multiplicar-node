const { multiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');
// Sirve para limpiar la consola
// Limpiamos la consola antes de ejecutar todo
console.clear()

multiplicar(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green.bold))
    .catch(err => console.log(err));