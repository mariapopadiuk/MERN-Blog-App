const express = require('express')
const bodyParser = require("body-parser");
const routes = require('./routes');

const port = process.env.PORT || 3000;
const app = express()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(bodyParser.urlencoded({ extended: false })); //parse url params
app.use(bodyParser.json());
app.use(routes);

 