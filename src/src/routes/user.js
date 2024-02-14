const { isAuth, isGabriel } = require('../../middlewares/auth');

const usersRoutes = require('express').Router();

usersRoutes.post('/register', register);
usersRoutes.post('/login', login);
usersRoutes.delete('/:id', [isGabriel], deleteUser);
usersRoutes.get('/', [isAuth], getUsers);

module.exports = usersRoutes;
