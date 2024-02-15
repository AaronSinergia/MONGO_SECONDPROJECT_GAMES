const Console = require('../models/console');

const getConsole = async (req, res, next) => {
  try {
    const consoles = await Console.find().populate('games');
    return res.status(200).json(consoles);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postConsole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newConsole = new Console(req.body);
    newConsole._id = id;

    const gameUpdated = await Console.findByIdAndUpdate(id, newConsole, {
      new: true,
    });
    return res.status(201).json(gameUpdated);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

const getAndModifyConsole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newConsole = new Console(req.body);
    newConsole._id = id;

    const consoleUpdated = await Console.findByIdAndUpdate(id, newConsole, {
      new: true,
    });
    return res.status(200).json(consoleUpdated);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

const deletePermanentlyConsole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newConsole = new Console(req.body);
    newConsole._id = id;

    const consoleUpdated = await Console.findByIdAndDelete(id, newConsole, {
      new: true,
    });
    return res.status(200).json(consoleUpdated);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

module.exports = {
  getConsole,
  postConsole,
  getAndModifyConsole,
  deletePermanentlyConsole,
};
