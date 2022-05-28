const express = require('express')
const app = express()

const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const routes = require('./routes');

app.listen(port, () => {
  console.log(`Example   app listening on port ${port}`)
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);




// //delete post route
// app.delete('/api/delete-post/:id', (req, res) => {
//   const id = req.params.id
//   connection.query(`delete from posts WHERE post_id=${id};`, function (error, result, fields) {
//     if (error) {
//       res.end('error');
//       throw error;
//     }
//   });
//   res.end('post deleted');
//   // connection.end();
// })
//databese connection
 