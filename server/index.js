const express = require('express')
const app = express()
require('dotenv').config()
const bcrypt = require('bcrypt')
const port = 4000

app.get('/api', (req, res) => {
  res.send("hello world")
})
//databese connection
app.listen(port, () => {
  console.log(`Example   app listening on port ${port}`)
})

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

connection.connect();

connection.query('select * from users', function (error, result, fields) {
  if (error) throw error;
  console.log(result);
});

connection.end();