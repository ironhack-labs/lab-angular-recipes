'use strict';

// ----- Required Packages ----- //
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// ----- Required Routes ----- //
const routes = require('./routes/index');

// ----- DB connect ----- //
require('./config/database');

// ----- Init app ----- //
const app = express();

// ----- Middlewares ----- //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));

// ----- Routes ----- //
app.use('/', routes);

// ----- Error handling ----- //
app.use((req, res, next) => {
  res.status(404).json({ code: 'not-found' });
});

app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);
  if (!res.headersSent) {
    res.status(500).json({ code: 'unexpected' });
  }
});

module.exports = app;
