'use strict';

const { Code } = require('../db');
const { day } = require('../config');

module.exports = {
  deploy,
  claim,
  stats
};

async function deploy({ body }, res) {
  const { codes } = body;
  await Code.table.whereIn('id', codes).update({ day });
  const stats = await Code.count({ day });
  stats.day = day;
  const data = { stats };
  res.json({ data });
}

async function claim({ body }, res) {
  const { code: id } = body;
  let code = await Code.table.where({ id }).select().first();
  if (!code) {
    return res.json({ error: 'Invalid code.' });
  }
  if (code.day <= 0 || code.day > day) {
    res.json({ error: 'Code is not deployed.' });
  }
  if (code.used) {
    res.json({ error: 'Code is already used.' });
  }
  code = await Code.update({ id, used: true });
  const stats = await Code.count({ day });
  stats.day = day;
  const data = { code, stats };
  res.json({ data });
}

async function stats(_req, res) {
  const stats = await Code.count({ day });
  const data = { stats };
  stats.day = day;
  res.json({ data });
}
