'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const nocache = require('nocache');
// eslint-disable-next-line require-sort/require-sort
require('express-async-errors');

const config = require('./config');
const router = require('./router');

const isProduction = process.env.NODE_ENV === 'production';

const app = express();
app.use(bodyParser.json());
app.use(express.static(config.staticFolder));

const format = isProduction ? 'combined' : 'dev';
app.use(morgan(format));

app.use(config.apiPath, nocache(), router);

module.exports = app;
