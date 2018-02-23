'use strict';

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes/index');

const app = express();

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/recipes-app', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({error: 'not found'});
});

// error handler
app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);

  if (!res.headersSent) {
    res.status(500).json({error: 'there was an error'});
  }
});

module.exports = app;
