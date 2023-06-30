pool = require('../utils/db').pool;

module.exports = {
  async createPatient(patient) {
    const { num_secu, lastname, surname } = patient;
    const query = {
      text: 'INSERT INTO patient(num_secu, lastname, surname) VALUES($1, $2, $3) RETURNING *',
      values: [num_secu, lastname, surname],
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
    const { id, num_secu, lastname, surname } = patient;
    const query = {
      text: 'UPDATE patient SET num_secu = $1, lastname = $2, surname = $3 WHERE id = $4 RETURNING *',
      values: [num_secu, lastname, surname, id],
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
      text: 'SELECT * FROM ordonnance_consultable INNER JOIN ordonnance ON ordonnance_consultable.ordonnance_id = ordonnance.id WHERE patient_id = $1',
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
