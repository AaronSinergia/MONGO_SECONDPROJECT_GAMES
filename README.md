Requisitos de entrega

En esta ocasión nos centraremos en aplicar autenticación a nuestro servidor Express. Haremos uso de una base de datos de videojuegos, consolas y usuarios para ponerlo en práctica.

Nuestro servidor tendrá que tener un modelo videojuego, otro de consola y otro de usuario. Las consolas popularán videojuegos, y los usuarios nos servirán para acceder o no a determinados endpoints.

Modelo

En esta ocasión el modelo que tenemos que tener en cuenta especialmente será el de usuario, el cual deberá seguir la siguiente estructura:

    email: { type: String, trim: true, required: true, unique: true },
    nombreUsuario: { type: String, trim: true, required: true, unique: true },
    contraseña: { type: String, trim: true, required: true },
    añoNacimiento: { type: Number, trim: true, required: true },
    rol: { type: String, trim: true, required: true },
    imagenPerfil: { type: String, trim: true, required: true }

    Podremos autenticarlo mediante el nombre del usuario o el e-mail, es indiferente.

El método de generación de los token será la contraseña generada y comprobada mediante bcrypt.

El usuario tendrá que tener el CRUD completo, implementando en login y register las medidas correctas para realizar las comprobaciones de contraseña, usuarios ya existentes, etc...

Además de esto deberemos hacer uso de bcrypt y jsonwebtoken.

Es obligatorio implementar un middleware de autenticación y un util que valide y genere los tokens.

Extra

Como podréis observar, en el modelo de usuario hay un campo rol. Opcionalmente se puede implementar otro middleware para diferenciar entre un usuario normal y un administrador.

Podéis implementar estos middlewares como queráis según vuestra lógica de negocio.

Por ejemplo: isUser y isAdmin.
