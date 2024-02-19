DOCUMENTACIÓN GAME BBDD (SPANISH)
+++++++++++++++++++++

(Si quieres hacer pruebas con usuario Admin haz login con las siguientes credenciales:
{
"userName": "AaronSinergia",
"password": "AaronSinergia123"
}
)

API_URL
++++++
Endpoint sobre CONSOLAS (incluye info sobre JUEGOS relacionados):
http://localhost:3000/api/v1/consoles

Endpoint sobre JUEGOS:
http://localhost:3000/api/v1/games

Endpoint sobre USUARIOS registrados con distintos tipos de derechos en modificación, creación y borrado de información sobre el endpoint de JUEGOS:
http://localhost:3000/api/v1/usuarios

Como puedo gestionar distinto tipo de info con mi api:

1 - Consultar info: Usa la url básica proporcionada arriba (en el caso del endpoint de USUARIOS, debes estar registrado y disponer de permisos asociados a la visualización).

2 - Crear info/registrar usuario: Usa la url básica proporcionada arriba (en el caso del endpoint de USUARIOS, debes añadir a la url: "/register").

3 - Modificar info: Sólo es posible modificar en los endpoints de CONSOLAS o JUEGOS (añade al final de la url el id de elemento a modificar. Ej. "/3423523466")

4 - Logueate con tu usuario para obtener permisos especiales: Añadiendo al endpoint de usuarios: "/login".

5 - Borrar info/USUARIOS: Para borrar JUEGOS u USUARIOS una vez logeado (añade al final de la url el id de elemento a eliminar. Ej. "/3423523466").

+++++++++++++++++++++
GAME DB DOCUMENTATION (ENGLISH)
+++++++++++++++++++++

(If you want to test the BBDD with Admin user, use the next login credentials:
{
"userName": "AaronSinergia",
"password": "AaronSinergia123"
}
)

API_URL
++++++
Endpoint on CONSOLES (includes information on related GAMES):
http://localhost:3000/api/v1/consoles

Endpoint about GAMES:
http://localhost:3000/api/v1/games

Endpoint on registered USERS with different types of rights to modify, create and delete information about the GAMES endpoint:
http://localhost:3000/api/v1/users

How can I manage different types of information with my API:

1 - Consult info: Use the basic url provided above (in the case of the USERS endpoint, you must be registered and have permissions associated with viewing).

2 - Create info/register user: Use the basic url provided above (in the case of the USER endpoint, you must add to the url: "/register").

3 - Modify info: It is only possible to modify the CONSOLES or GAMES endpoints (add the id of the element to be modified to the end of the url. Ex. "/3423523466")

4 - Log in with your user to obtain special permissions: Adding to the user endpoint: "/login".

5 - Delete info/USERS: To delete GAMES or USERS when you are logged (add the id of the element to be deleted to the end of the url. Ex. "/3423523466").
