const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    database : 'shop_db'
});

db.connect((err) =>{
    if(err) {
        console.error('Error Connection to the databases:',err.stack);
        return;
    }
    console.log('connected to database');
});

module.exports = db;