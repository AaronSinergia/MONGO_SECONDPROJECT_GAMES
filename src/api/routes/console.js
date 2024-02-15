const consolesRoutes = require('express').Router();
const {
  getConsole,
  postConsole,
  getAndModifyConsole,
  deletePermanentlyConsole,
} = require('../controllers/console');

consolesRoutes.get('/', getConsole);
consolesRoutes.post('/', postConsole);
consolesRoutes.put('/:id', getAndModifyConsole);
consolesRoutes.delete('/:id', deletePermanentlyConsole);

module.exports = consolesRoutes;
