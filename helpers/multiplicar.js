const fs = require('fs'); // Importamos el paquete que sirve para manejar los archivos del sistema (guardar, leer, etc)
const colors = require('colors');

const multiplicar = async(base, listar, hasta) => {
    try {
    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${base*i}\n`;
        }
    
        if(listar) {
            console.log('==================='.blue);
            console.log('   Tabla del'.white.bold, colors.cyan(base));
            console.log('==================='.blue);
            console.log(consola);
        }
        // writeFileSync() sirve para guardar archivos, si solo se pone el nombre del archivo entonces se guarda en el directorio actual
        // Como primer parametro se pasa el path con el nombre del archivo
        // Como segundo parametro se pasa los datos que lleva el archivo
        // También existe el writeFile() donde se tendría que pasar un callback como tercer parametro
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada`;
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    multiplicar
}