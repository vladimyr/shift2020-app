'use strict';

require('dotenv').config();

const path = require('path');

module.exports = {
  port: process.env.PORT || '8080',
  ip: process.env.IP || 'localhost',
  apiPath: process.env.API_PATH || '/api/v1/',
  staticFolder: path.resolve(__dirname, './public'),
  day: 1
};
