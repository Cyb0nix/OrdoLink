pool = require('./db').pool;

module.exports = {
  async createPharmacien(pharmacien) {
    const { lastname, firstname, rpps } = pharmacien;
    const query = {
      text: 'INSERT INTO pharmaciens(lastname, firstname, rpps) VALUES($1, $2, $3) RETURNING *',
      values: [lastname, firstname, rpps]
    };
    try {
      const result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async getPharmacienByEmail(email) {
    const query = {
      text: 'SELECT * FROM pharmaciens WHERE email = $1',
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
      text: 'SELECT * FROM pharmaciens WHERE id = $1',
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
      text: 'UPDATE pharmaciens SET lastname = $1, firstname = $2, rpps = $3 WHERE id = $4 RETURNING *',
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
      text: 'DELETE FROM pharmaciens WHERE id = $1',
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
      text: 'SELECT * FROM pharmaciens WHERE lastname ILIKE $1',
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
