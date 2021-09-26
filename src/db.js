const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://postgres:postgres@localhost:5432/lembretes"
});


exports.pool = pool;