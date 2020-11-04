const express = require('express');
const mongoose = require('mongoose');
const conn_url =
  'mongodb+srv://admin:Heq32bP0eXXNC8lL@cluster0.mpbo6.mongodb.net/tinderdb?retryWrites=true&w=majority';

const app = express();
const port = process.env.PORT || 8001;

// middlewares

// db config

// endpoints
app.get('/', (req, res) => {
  res.status(200).send('Hey earthlings!');
});

// listener

app.listen(port, () => console.log(`server started at: ${port}`));
