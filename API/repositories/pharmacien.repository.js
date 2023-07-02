pool = require('../utils/db').pool;

module.exports = {
  async createPharmacien(pharmacien) {
    const { lastname, firstname, rpps, rpps_expiration } = pharmacien;
    const query = {
      text: 'INSERT INTO pharmacien(lastname, firstname, rpps, rpps_expiration) VALUES($1, $2, $3, $4) RETURNING id',
      values: [lastname, firstname, rpps, rpps_expiration]
    };
    try {
      const result = await pool.query(query);
      return result.rows[0].id;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async getPharmacienByEmail(email) {
    const query = {
      text: 'SELECT * FROM pharmacien WHERE email = $1',
      values: [email]
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async getPharmacienById(id) {
    const query = {
      text: 'SELECT * FROM pharmacien WHERE id = $1',
      values: [id]
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async updatePharmacien(pharmacien) {
    const { id, lastname, firstname, rpps } = pharmacien;
    const query = {
      text: 'UPDATE pharmacien SET lastname = $1, firstname = $2, rpps = $3 WHERE id = $4 RETURNING *',
      values: [lastname, firstname, rpps, id]
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async deletePharmacien(id) {
    const query = {
      text: 'DELETE FROM pharmacien WHERE id = $1',
      values: [id]
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async searchPharmaciensByNom(nom) {
    const query = {
      text: 'SELECT * FROM pharmacien WHERE lastname ILIKE $1',
      values: [`%${nom}%`],
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
