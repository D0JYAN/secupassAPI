//Importacion de MySQL2
const mysql2 = require('mysql2');

//Configuracion de la conexion
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'secupassapi'
});

//Establecer la conexion
connection.connect((err) => {
    if(err) throw err;
    console.log('Conectado A La Base De Datos');
});

//Exportar la conexion para utilizarla en los controladores
module.exports = connection;