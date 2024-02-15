const Game = require('../models/game');

const getGame = async (req, res, next) => {
  try {
    const games = await Game.find();
    return res.status(200).json(games);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body);

    const gameSaved = await newGame.save();

    return res.status(201).json(gameSaved);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

const getAndModifyGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newGame = new Game(req.body);
    newGame._id = id;

    const gameUpdated = await Game.findByIdAndUpdate(id, newGame, {
      new: true,
    });
    return res.status(200).json(gameUpdated);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

const deletePermanentlyGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newGame = new Game(req.body);
    newGame._id = id;

    const gameUpdated = await Game.findByIdAndDelete(id, newGame, {
      new: true,
    });
    return res.status(200).json(gameUpdated);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

module.exports = { getGame, postGame, getAndModifyGame, deletePermanentlyGame };
