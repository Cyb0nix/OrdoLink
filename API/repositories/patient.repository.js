const { pool } = require('../utils/db');

module.exports = {
  async getPatients() {
    const query = {
      text: 'SELECT * FROM patient',
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

  async createPatient(patient) {
    const { num_secu, lastname, firstname } = patient;
    const query = {
      text: 'INSERT INTO patient(num_secu, lastname, firstname) VALUES($1, $2, $3) RETURNING *',
      values: [num_secu, lastname, firstname],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async getPatientByNumSecu(num_secu) {
    const query = {
      text: 'SELECT * FROM patient WHERE num_secu = $1',
      values: [num_secu],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async getPatientById(id) {
    const query = {
      text: 'SELECT * FROM patient WHERE id = $1',
      values: [id],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async updatePatient(patient) {
    const { id, num_secu, lastname, firstname } = patient;
    const query = {
      text: 'UPDATE patient SET num_secu = $1, lastname = $2, firstname = $3 WHERE id = $4 RETURNING *',
      values: [num_secu, lastname, firstname, id],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async deletePatient(id) {
    const query = {
      text: 'DELETE FROM patient WHERE id = $1',
      values: [id],
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async getPatientOrdonnances(id) {
    const query = {
      text: 'SELECT ordonnance_id FROM ordonnance WHERE patient_id = $1',
      values: [id],
    };
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
