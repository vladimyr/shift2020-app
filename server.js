'use strict';

const { ip, port } = require('./config');
const { promisify } = require('util');

// eslint-disable-next-line require-sort/require-sort
const app = require('./app');

const runServer = promisify(app.listen.bind(app));

runServer(port, ip)
  .then(() => console.log('Server listening on address: http://%s:%s', ip, port));
