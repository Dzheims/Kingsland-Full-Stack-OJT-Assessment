const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'kingsland',
  password: '',
  port: '',
});

module.exports = pool;
