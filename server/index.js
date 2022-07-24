const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); //parse url params
app.use(bodyParser.json());
app.use(routes);
app.get('*', function (req, res) {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
