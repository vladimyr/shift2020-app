'use strict';

const path = require('path');

module.exports = {
  client: 'sqlite',
  connection: {
    filename: path.join(__dirname, './db.sqlite')
  }
};
