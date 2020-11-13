const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: String,
  url: String,
});

module.exports = Card = mongoose.model('cards', cardSchema);
