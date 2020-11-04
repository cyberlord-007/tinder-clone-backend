const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  name: String,
  url: String,
});

export default mongoose.model('cards', cardSchema);
