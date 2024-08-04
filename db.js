const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourUsername',
  password: 'yourPassword',
  database: 'HotelManagement'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});

module.exports = connection;
