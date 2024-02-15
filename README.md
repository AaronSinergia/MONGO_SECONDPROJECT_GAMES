Requisitos de entrega

El método de generación de los token será la contraseña generada y comprobada mediante bcrypt.

El usuario tendrá que tener el CRUD completo, implementando en login y register las medidas correctas para realizar las comprobaciones de contraseña, usuarios ya existentes, etc...

Además de esto deberemos hacer uso de bcrypt y jsonwebtoken.

Es obligatorio implementar un middleware de autenticación y un util que valide y genere los tokens.

Extra

Como podréis observar, en el modelo de usuario hay un campo rol. Opcionalmente se puede implementar otro middleware para diferenciar entre un usuario normal y un administrador.

Podéis implementar estos middlewares como queráis según vuestra lógica de negocio.

Por ejemplo: isUser y isAdmin.
