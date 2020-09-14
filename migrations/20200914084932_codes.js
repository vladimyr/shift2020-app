'use strict';

exports.up = knex => {
  return knex.schema.createTable('code', table => {
    table.string('id', 6).primary();
    table.boolean('used').defaultTo(false);
    table.enum('type', ['GOLD', 'SILVER']).defaultTo('SILVER');
    table.integer('day').defaultTo(0);
  });
};

exports.down = knex => knex.schema.dropTable('code');
