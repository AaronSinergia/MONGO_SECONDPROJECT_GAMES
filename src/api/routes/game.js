const {
  getGame,
  postGame,
  getAndModifyGame,
  deletePermanentlyGame,
} = require('../controllers/game');
const gamesRoutes = require('express').Router();

gamesRoutes.get('/', getGame);
gamesRoutes.post('/', postGame);
gamesRoutes.put('/:id', getAndModifyGame);
gamesRoutes.delete('/:id', deletePermanentlyGame);

module.exports = gamesRoutes;
