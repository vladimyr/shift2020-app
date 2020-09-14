'use strict';

const path = require('path');
const { readFileSync } = require('fs');

const records = readFileSync(path.join(__dirname, '../codes.tsv'), 'utf-8')
  .split(/\r?\n/g)
  .filter(Boolean);

exports.seed = async knex => {
  await knex('code').del();
  return knex('code').insert(records.map(record => {
    let [id, type = 'SILVER'] = record.split(/\s+/g);
    type = type.toUpperCase();
    return { id, type };
  }));
};
