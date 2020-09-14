'use strict';

const code = require('./code');
const express = require('express');

const router = express.Router();
router.use(code.path, code.router);

module.exports = router;
