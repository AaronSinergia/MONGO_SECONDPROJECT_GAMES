require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');

connectDB();

const app = express();

app.use('*', (req, res, next) => {
  return res.status(404).json('Route Not Found');
});

app.listen(3000, () => {
  console.log('SERVER FUNCIONANDO EN http://localhost:3000');
});
