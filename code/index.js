'use strict';

const ctrl = require('./code.controller');
const router = require('express').Router();

router
  .get('/', ctrl.stats)
  .post('/claim', ctrl.claim)
  .post('/deploy', ctrl.deploy);

module.exports = {
  path: '/codes',
  router
};
