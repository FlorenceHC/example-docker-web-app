'use strict';

const os = require('os');
const express = require('express');

const { env } = process;
const PORT = env.PORT || 8080;
const HOST = env.HOST || '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
    date: new Date,
    hostname: os.hostname(),
    uptime: os.uptime(),
    env
  });
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
