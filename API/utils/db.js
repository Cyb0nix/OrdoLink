
const { Pool} = require('pg')
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const pool = new Pool({
    connectionString: URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    pool
}

