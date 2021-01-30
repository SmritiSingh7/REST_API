const mysql = require('mysql');

const mysqlConnection = mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'db',
    port:'3306'
});

module.exports = mysqlConnection;