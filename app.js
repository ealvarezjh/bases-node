var colors = require('colors');

const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':

        listarTabla(base, limite);
        break;
    case 'crear':

        crearArchivo(base, limite)
            .then((archivo) => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('El comando no es reconocido.'.red);
        break;
}



/*
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
**/