// Extraemos argv de yargs
// alias es como se debe escribir en la terminal
// type es el tipo de dato
// demandOption es si es requerido o no
// default sirve para que en caso de que no se mande el comando, se establece uno por defecto
// describe sirve para que se muestre una descripción cuando el usuario usa el node app --help, esto sirve para que el usuario sepa para que sirve el comando
// .check sirve para validar si es el tipo de dato correcto

const { describe } = require('yargs');

const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar',
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola',
            })
            .option('h', {
                alias:'hasta',
                type: 'number',
                default: 10,
                describe: 'Número hasta donde se quiere la tabla'
            })
            .check( (argv, options) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un número'
                }
                if(isNaN(argv.h)){
                    throw 'El hasta tiene que ser un número'
                }
                
                return true;
            })
            .argv;

// exportanción por defecto
module.exports = argv;