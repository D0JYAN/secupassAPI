//Importacion de la conecciona la bd
const connection = require('../models/dbConnection');
//Importacion bcryptjs
const bcryptjs = require('bcryptjs');

//Funciones
exports.register = async (req, res) => {
    const { username, correo, password, validacion } = req.body;
    //Encriptar contraseña
    const passSecret = await bcryptjs.hash(password, 10);
    //Consulta MySQL
    const query = 'INSERT INTO `usuarios` (username, correo, password, validacion) VALUES (?,?,?,?);';
    //Ejecutar la consulta
    connection.query(query, [username, correo, passSecret, validacion], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                //Si ocurre un error de duplicación, verificar si es por el username o el correo
                if (err.sqlMessage.includes('username')) {
                    return res.status(400).json({ message: "El nombre de usuario ya está en uso, elige otro." });
                } else if (err.sqlMessage.includes('correo')) {
                    return res.status(400).json({ message: "El correo ya está registrado, utiliza otro correo o inicia sesión." });
                }
            }
            //Si es otro tipo de error, manejarlo de forma genérica
            console.error('Error en la consulta:', err);
            return res.status(500).json({ message: "Error en el servidor" });
        }
        //Si no hay errores, enviar mensaje de éxito
        res.json({
            message: "Registro Exitoso",
            data: result
        });
    });
}

exports.login = async (req, res) => {
    const { username, password } = req.body;
    //Consulta MySQL
    const query = 'SELECT * FROM `usuarios` WHERE username =?;';
    //Ejecutar la consulta
    connection.query(query, [username], (err, result) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).json({ message: "Error en el servidor" });
        }
        console.log('Resultados de la consulta: ', result);
        if (result.length > 0) {
            //Comprobar contraseña
            const user = result[0];//Datos del usuario
            const samePass = bcryptjs.compareSync(password, user.password);//Compara las Contraseñas
            if (samePass) {
                //Si la contraseña es correcta, enviar datos del usuario
                console.log("Usuario autenticado correctamente.");
                res.json({ message: "Login Exitoso", data: result });
            } else {
                console.log("Contraseña incorrecta.");
                res.json({ message: "Contraseña Incorrecta", data: [] });
            }
        } else {
            res.status(401).json({ message: "Usuario o contraseña incorrectos", data: result });
        }
    })
}

exports.update = async (req, res) => {

}