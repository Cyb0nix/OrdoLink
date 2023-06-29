const { pool } = require("../utils/db");

module.exports = {
    async createMedecin(rpps, phone_number, lastname, firstname, email, password, rpps_expiration_date,type_id) {

        const query = {
            text: 'INSERT INTO medecin(rpps, phone_number, lastname, firstname, email, password, rpps_expiration_date,type_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
            values: [rpps, phone_number, lastname, firstname, email, password, rpps_expiration_date,type_id],
        };
        try {
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },

    async getMedecinByRpps(rpps) {
        const query = {
            text: 'SELECT * FROM medecin WHERE rpps = $1',
            values: [rpps],
        };
        try {
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },

    async getMedecinById(id) {
        const query = {
            text: 'SELECT * FROM medecin WHERE id = $1',
            values: [id],
        };
        try {
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },

    async updateMedecin(id, rpps, phone_number, lastname, firstname, email, password, rpps_expiration_date,type_id) {
        const query = {
            text: 'UPDATE medecin SET rpps = $1, phone_number = $2, lastname = $3, firstname = $4, email = $5, password = $6, rpps_expiration_date = $7,type_id = $8 WHERE id = $9 RETURNING *',
            values: [rpps, phone_number, lastname, firstname, email, password, rpps_expiration_date,type_id, id],
        };
        try {
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },

    async deleteMedecin(id) {
        const query = {
            text: 'DELETE FROM medecin WHERE id = $1',
            values: [id],
        };
        try {
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },

    async getMedecins() {
        const query = {
            text: 'SELECT * FROM medecin',
        };
        try {
            const result = await pool.query(query);
            return result.rows;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }

}
    