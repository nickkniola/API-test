require('dotenv/config');
const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/api/:date');
