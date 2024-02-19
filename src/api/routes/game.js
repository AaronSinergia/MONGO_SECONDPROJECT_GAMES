const {
  getGame,
  postGame,
  getAndModifyGame,
  deletePermanentlyGame,
} = require('../controllers/game');
const { isAuth, isAdmin } = require('../middlewares/auth');
const gamesRoutes = require('express').Router();

gamesRoutes.get('/', getGame);
gamesRoutes.post('/', [isAuth], postGame);
gamesRoutes.put('/:id', getAndModifyGame);
gamesRoutes.delete('/:id', [isAdmin], deletePermanentlyGame);

module.exports = gamesRoutes;
