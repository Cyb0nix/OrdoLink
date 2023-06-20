pool = require('./db').pool

module.exports = {
    async createUser(user) {
        const { username, password, email } = user;
        const query = {
            text: 'INSERT INTO users(username, password, email) VALUES($1, $2, $3) RETURNING *',
            values: [username, password, email]
        }
        try {
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },
    async getUser(email) {
        const query = {
            text: 'SELECT * FROM users WHERE email = $1',
            values: [email]
        }
        try {
            const result = await pool.query(query);
            return result.rows[0];
        }   
        catch (err) {
            console.log(err);
            throw err;
        }
    },
    async getUserById(id) {
        const query = {
            text: 'SELECT * FROM users WHERE id = $1',
            values: [id]
        }
        try {
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },
    async updateUser(user) {
        const { id, username, password, email } = user;
        const query = {
            text: 'UPDATE users SET username = $1, password = $2, email = $3 WHERE id = $4 RETURNING *',
            values: [username, password, email, id]
        }
        try {
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },
    async deleteUser(id) {
        const query = {
            text: 'DELETE FROM users WHERE id = $1',
            values: [id]
        }
        try {
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    },
    async areValidCredentials(username, password) {
        const query = {
            text: 'SELECT * FROM "user" WHERE "userEmail" = $1 AND "userPassword" COLLATE utf8mb4_general_ci = sha2(concat("userCreated", $2), 224) COLLATE utf8mb4_general_ci',
            values: [username, password]
        }
        try {
            const result = await pool.query(query);
            if (result.rows.length > 0) {
                return true;
            }else{
                return false;
            }
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}
