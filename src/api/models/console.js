const mongoose = require('mongoose');

const consoleSchema = new mongoose.Schema(
  {
    videoconsoleName: { type: String, trim: true, required: true },
    videoconsoleYear: { type: Number, trim: true, required: true },
    videoconsolePhoto: { type: String, trim: true, required: true },
    games: [{ type: mongoose.Types.ObjectId, ref: 'games' }],
  },
  { timestamps: true, collection: 'videoconsoles' }
);

const Console = mongoose.model('videoconsoles', consoleSchema, 'videoconsoles');

module.exports = Console;
