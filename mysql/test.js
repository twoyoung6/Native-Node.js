/* 还未学习完 mysql */
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '122.51.181.164',
  port: '3306',
  user: 'root',
  password: 'admin',
  database: 'test'
});

connection.connect();
connection.query('SELECT 1 + 1 As solution', function (error, results, fields) {
  if (error) { throw error }
  console.log('The solution is: ', res[0].solution);
});
