const express = require('express')
const app = express()
require('dotenv').config()
const bcrypt = require('bcrypt')
const port = 4000
const bodyParser = require("body-parser");

app.listen(port, () => {
  console.log(`Example   app listening on port ${port}`)
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//databese connection
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

connection.connect();

app.get('/api/posts', (req, res) => {

  connection.query('select * from posts', function (error, result, fields) {
    if (error) throw error;
    res.send(result)
  });
  // connection.end();
})

//add post route
app.post('/api/add-post', (req, res) => {
  const { user_id, title, text, date_created, img_url} = req.body;
  connection.query(`insert into posts (user_id, title, text, date_created, img_url) values (${user_id}, '${title}', '${text}', '${date_created}', '${img_url}');` , function (error, result, fields) {
    if (error) {
      res.end('error');
      throw error;
    }
  });
  res.end('post added');
  // connection.end();
})


//update post route
app.put('/api/put-post/:id', (req, res) => {
  const id = req.params.id
  console.log(id);
  const { user_id, title, text, date_created, img_url } = req.body;
  connection.query(`update posts SET title="${title}", text="${text}", date_created="${date_created}", img_url="${img_url}" WHERE post_id=${id};`, function (error, result, fields) {
    if (error) { 
      res.end('error');
      throw error;
    }
  });
  res.end('post updated');
  // connection.end();
})

//delete post route
app.delete('/api/delete-post/:id', (req, res) => {
  const id = req.params.id
  connection.query(`delete from posts WHERE post_id=${id};`, function (error, result, fields) {
    if (error) {
      res.end('error');
      throw error;
    }
  });
  res.end('post deleted');
  // connection.end();
})
