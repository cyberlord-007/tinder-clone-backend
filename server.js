const express = require('express');
const mongoose = require('mongoose');
const Cards = require('./models/cards');
const cors = require('cors');

const conn_url =
  'mongodb+srv://admin:Heq32bP0eXXNC8lL@cluster0.mpbo6.mongodb.net/tinderdb?retryWrites=true&w=majority';

const app = express();
const port = process.env.PORT || 8001;

// middlewares
app.use(express.json());
app.use(cors());

// db config
mongoose.connect(conn_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// endpoints
app.get('/', (req, res) => {
  res.status(200).send('Hey earthlings!');
});

app.post('/tinder/cards', (req, res) => {
  const dbcard = req.body;
  Cards.create(dbcard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/tinder/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listener

app.listen(port, () => console.log(`server started at: ${port}`));
