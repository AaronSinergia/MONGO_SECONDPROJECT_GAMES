const mongoose = require('mongoose');

const Console = require('../api/models/console');

const consoles = [
  {
    videoconsoleName: 'PlayStation One',
    videoconsoleYear: 1994,
    videoconsolePhoto:
      'https://i.ebayimg.com/images/g/ZAwAAOSw1DtXD6~j/s-l1200.webp',
    games: [],
  },
  {
    videoconsoleName: 'PlayStation Two',
    videoconsoleYear: 2000,
    videoconsolePhoto:
      'https://es.static.webuy.com/product_images/Juegos/Playstation2%20Consolas/711719105701C_l.jpg',
    games: [],
  },
  {
    videoconsoleName: 'Nintendo Switch',
    videoconsoleYear: 2017,
    videoconsolePhoto:
      'https://m.media-amazon.com/images/I/71U1R-V8+dL._AC_UF894,1000_QL80_.jpg',
    games: [],
  },
];

const consoleDocuments = consoles.map((item) => new Console(item));

mongoose
  .connect(
    'mongodb+srv://aaronromeromusic:Rewenclow.1324657980@cluster0.otk092i.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(async () => {
    const allConsoles = await Console.find();

    if (allConsoles.length) {
      await Console.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Console.insertMany(consoleDocuments);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
