require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("storage")); //le dice a express cual es el contenido estatico y por ende publico de la aplicacion, para poder acceder desde el navegador http://localhost:puerto/nombredelarchivo
const port = process.env.PORT || 3000;

app.use("/api", require('./routes')); //invoca al archivo index del directorio routes

app.listen(port, () => {
    console.log("puto el que escuche el puerto: " + port);
});