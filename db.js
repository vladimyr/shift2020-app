'use strict';

const path = require('path');

const knex = require('knex')({
  client: 'sqlite',
  connection: {
    filename: path.join(__dirname, './db.sqlite')
  }
});

class Code {
  static get table() {
    return knex.table('code');
  }

  static deployed(day) {
    return this.table
      .andWhere('day', '>', 0)
      .andWhere('day', '<=', day);
  }

  static async count({ day }) {
    const deployed = await count(this.deployed(day));
    const used = await count(this.deployed(day).where({ used: true }));
    return { deployed, used };
  }

  static async update({ id, ...data } = {}) {
    await this.table.where({ id }).update(data);
    return this.table.where({ id }).select().first();
  }
}

module.exports = {
  knex,
  Code
};

async function count(query) {
  const data = await query.count();
  const [result] = Object.values(data[0]);
  return result;
}
