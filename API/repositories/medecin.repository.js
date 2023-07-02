const { pool } = require("../utils/db");

module.exports = {
    async createMedecin(medecin) {
        try {
            const query = {
                text: 'INSERT INTO medecin(rpps, phone_number, lastname, firstname,adresse, name, rpps_expiration,type_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
                values: [medecin.rpps, medecin.phone_number, medecin.lastname, medecin.firstname,medecin.adresse, medecin.name, medecin.rpps_expiration, medecin.type_id],
            };
            const result = await pool.query(query);
            return result.rows[0].id;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },

    async getTypes() {
        
        try {
            const query = {
                text: 'SELECT * FROM medecintype',
            };
            const result = await pool.query(query);
            return result.rows;
        }
        catch (err) {
            console.log(err);
            return null;
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
            return null;
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
            return null;
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
            return null;
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
            return null;
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
            return null;
        }
    },

    async getMedecinOrdonnances(id) {
        const query = {
            text: 'SELECT * FROM ordonnance INNER JOIN prescription ON ordonnance.id = prescription.ordonnance_id WHERE medecin_id = $1',
            values: [id],
        };
        try {
            const result = await pool.query(query);
            return result.rows;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },

    async getMedecinPatients(id) {
        const query = {
            text: 'SELECT * FROM patient INNER JOIN liste_medecin_patient ON liste_medecin_patient.patient_id = patient.id WHERE liste_medecin_patient.medecin_id = $1',
            values: [id],
        };
        try {
            const result = await pool.query(query);
            return result.rows;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }


}
    