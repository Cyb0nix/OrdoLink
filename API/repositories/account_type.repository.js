const { pool } = require("../utils/db");

module.exports = {
    async createAccountType(accountType,user_id,type_id){
        
        const query = {
            text: 'INSERT INTO account_type(accountType,user_id,type_id) VALUES($1, $2, $3) RETURNING id',
            values: [accountType,user_id,type_id],
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
            throw err;

        }
    }
}