const mysql = require('mysql2/promise');

const createConnection = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'testing_db'
    });
}

const getReply = async (keyword) => {

    const connection = await createConnection();

    const [rows] = await connection.execute('SELECT message FROM wa_replies WHERE keyword = ?', [keyword]);
    if(rows.length > 0)
    {
        return rows[0].message;
    }
    else
    {
        return false;
    }
}

module.exports = {
    createConnection,
    getReply
}