const { pool } = require("../utils/db");


module.exports = {
    async createOrdonnance(patient_id, medecin_id, prescription_date) {
        const query = {
            text: 'INSERT INTO ordonnance(patient_id, medecin_id, prescription_date) VALUES($1, $2, $3) RETURNING id',
            values: [patient_id, medecin_id, prescription_date],
        };
        try {
            const result = await pool.query(query);
            return result.rows[0].id;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },

    async createPrescription(medecine,posologie,renewale,given,ordonnance_id,quantity) {
        const query = {
            text: 'INSERT INTO prescription(medecine,posologie,renewale,given,ordonnance_id, quantity) VALUES($1, $2, $3, $4, $5,$6) RETURNING id',
            values: [medecine,posologie,renewale,given,ordonnance_id, quantity],
        };
        try {
            const result = await pool.query(query);
            return result.rows[0].id;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },


    async getOrdonnanceById(id) {
        const query = {
            text: 'SELECT * FROM ordonnance WHERE id = $1',
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

    async getPrescriptionsByOrdonnanceId(ordonnance_id) {
        const query = {
            text: 'SELECT * FROM prescription WHERE ordonnance_id = $1',
            values: [ordonnance_id],
        };
        try {
            const result = await pool.query(query);
            return result.rows;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },

    async getOrdonnances(){
        const query = {
            text: 'SELECT * FROM ordonnance',
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


    async updatePrescription(id,medecine,posologie,renewale,given,ordonnance_id){
        const query = {
            text: 'UPDATE prescription SET medecine = $1, posologie = $2, renewale = $3, given = $4, ordonnance_id = $5 WHERE id = $6 RETURNING *',
            values: [medecine,posologie,renewale,given,ordonnance_id,id],
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

    async deletePrescription(id) {
        const query = {
            text: 'DELETE FROM prescription WHERE id = $1',
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

    async deleteOrdonnance(id) {
        const query = {
            text: 'DELETE FROM ordonnance WHERE id = $1',
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
    }

};
