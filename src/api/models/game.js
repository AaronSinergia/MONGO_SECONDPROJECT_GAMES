const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    gameName: { type: String, required: true },
    deliveryGameYear: { type: Number, required: true },
    gamePhoto: { type: String, required: true },
  },
  { timestamps: true, collection: 'games' }
);

const Game = mongoose.model('games', gameSchema, 'games');

module.exports = Game;
