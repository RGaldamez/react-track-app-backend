require('dotenv').config();
require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo,', err);
});

app.get('/', (req, res) => {
  res.send('Holiwis');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
