const express = require('express');
const fs = require('fs'); //file system
const router = express.Router();

const PATH_ROUTES = __dirname;

//remover la extension de los archivos
const removeExtension = (fileName) => {
    //devuelve por ejemplo tracks.js
    //split devuevle una lista [tracks, js]
    //con shift le decimos que agarre el primer elemento
    return fileName.split(".").shift();
}

//que 'fs' lea un directorio de manera asincrona
fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file); //pueden llegar todos los archivos del directorio routes
    if (name !== 'index'){
        console.log(`cargando la ruta ${name}`);
        router.use(`/${name}`, require(`./${file}`)); 
        //le dice a router que use los nombre de los archivos excepto el index
        //segundo parametro le dice que use tal controlador
    }
});
// console.log({a});

module.exports = router;