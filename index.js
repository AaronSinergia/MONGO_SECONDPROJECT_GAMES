require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const consolesRoutes = require('./src/api/routes/console');
const gamesRoutes = require('./src/api/routes/game');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/consoles', consolesRoutes);
app.use('/api/v1/games', gamesRoutes);

app.use('*', (req, res, next) => {
  return res.status(404).json('404 Route Not Found');
});

app.listen(3000, () => {
  console.log('SERVER desplegado en http://localhost:3000');
});
