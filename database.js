const environment = process.env.NODE-ENV;
const config = require('./knexfile')[environment];
const knex = require('knex')(config);

module.exports = knex;
