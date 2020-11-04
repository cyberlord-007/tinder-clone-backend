const express = require('express');

const app = express();
const port = process.env.PORT || 8001;

// middlewares

// endpoints

app.get('/', (req, res) => {
  res.status(200).send('Hey earthlings!');
});

// listener

app.listen(port, () => console.log(`server started at: ${port}`));
