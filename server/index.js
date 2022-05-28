const express = require('express')
const app = express()
const port = 4000

app.get('/api', (req, res) => {
  res.send("[{ title: '123', tex: 'sex', id: 1 }, { title: '123', tex: 'sex', id: 2 }, { title: '123', tex: 'sex', id: 3 }]")
})

app.listen(port, () => {
  console.log(`Example   app listening on port ${port}`)
})

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog_etic'
});

connection.connect();

connection.query('select * from users', function (error, results, fields) {
  if (error) throw error;
  console.log('users sao: ', results);
});

connection.end();