// Importar express
const express = require('express');
//Importar bodyParser
const bodyParser = require('body-parser');
//Importar Cors
const cors = require('cors');

//Crear una instancia de la aplicación
const app = express();
// Configurar CORS para permitir conexiones desde cualquier origen
app.use(cors());
// Configurar el formato de los datos a recibir
app.use(bodyParser.json());

//asignar el puerto
const PORT = process.env.PORT ?? 3000;

//Levantar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Activo En El Puerto: ${PORT}`);
})