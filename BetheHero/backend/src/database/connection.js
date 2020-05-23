const knex = require('knex');
const configuration = require('../../knexfile');

const env = crossess.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(configuration.development);

module.exports = routes;



