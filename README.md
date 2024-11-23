Este es la parte BackEnd de un proyecto denominado SecuPass (un generador de contraseñas), en esat parte se van a usar herramientas, frameworks y librerias como:
<br>
  - Express.js
  - Nodemon
  - MySQL2
  - Body-Parser 
  - Node.js
  - Cors
  
El Proyecto está mayormente enfocado en la arquitectura API RESTful, donde el cliente y el servidor están desacoplados, y ambos pueden evolucionar independientemente siempre que respeten el contrato de la API.
<br>
La estrutura del proyecto es la siguiente:
<br>
```plaintext
secupassAPI/
  ├── src/
  │   ├── controllers/   # Controladores para manejar la lógica de las rutas
  │   │   └── userController.js
  │   ├── models/        # Modelos de datos
  │   │   └── dbConnection.js
  │   ├── routes/        # Rutas definidas para la API
  │   │   └── userRoutes.js
  │   ├── middlewares/   # Middlewares (autenticación, validación, etc.)
  │   │   └── authMiddleware.js
  │   ├── server.js      # Punto de entrada del servidor
  ├── node_modules/      # Dependencias instaladas (automático)
  ├── package.json       # Dependencias y scripts de Node.js
  └── README.md          # Documentación del proyecto
```
## ¿Cómo inicializar el proyecto?

1. Para levantar la API, dentro de nuestro editor de código, abrimos una terminal con la ruta del proyecto.
   <br>
2. Una vez dentro del proyecto, en la terminal se escribe el comando `nodemon server.js`, lo que permitirá que todos los servicios que ofrece la API estén activos.

## ¿Cómo apagar el proyecto?

1. Una vez terminadas las pruebas y visto que todo funciona correctamente, posicionados en la terminal, se presionan las teclas `Ctrl + C`.
   <br>
2. Preguntará si quieres dar de baja el servicio. Presiona la tecla `S` para confirmar o `N` para cancelar, ¡y listo!

