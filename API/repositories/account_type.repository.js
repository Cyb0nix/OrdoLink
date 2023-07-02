const { pool } = require("../utils/db");

module.exports = {
    async createAccountType(user_id,type_id,type){
        
        const query = {
            text: 'INSERT INTO account_type(user_id,type_id,type) VALUES($1, $2, $3) RETURNING *',
            values: [user_id,type_id,type],
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
    async deleteAccountType(id){
        const query = {
            text: 'DELETE FROM account_type WHERE id = $1',
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
    }
}