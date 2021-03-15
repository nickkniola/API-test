require('dotenv/config');
const express = require('express');
const fetch = require('node-fetch');

const app = express();

// GET games by a specified date ex. '2018-FEB-27'
app.get('/api/games/:date', (req, res) => {
  const date = req.params.date;
  fetch(`https://api.sportsdata.io/v3/cbb/scores/json/GamesByDate/${date}?key=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(data => res.json(data));
});

app.listen(process.env.PORT, () => {
  process.stdout.write(`Express Server Listening Port: ${process.env.PORT}`)
});
