const connection = require('../../services/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {

  try {
    //GET EMAIL AND PASSWORD FROM BODY
    const { email, password } = req.body;
    // IF MISSED EMAIl OR PASSWORD RETURN ERROR STOP PROGRAM
    if (!(email || passwordFromClient)) {
      res.status(400).send("All input required");
    }
    connection.query(
      //CHECK IN DB IF USER EXISTS
      `select id, email, password from users where email="${email}"`,
      function (error, result) {
        if (error) throw error;

        const passwordInDB = result[0].password;
        bcrypt.compare(password, passwordInDB, function (err, result) {
          if (!result) {
            res.status(400).send("Bad credentials");
          }
        });

        const accessToken = jwt.sign({ username: email }, process.env.JWT_SECRET,
          {
            expiresIn: "1m",
          }
        );
        res.send({
          accessToken, userId: result[0].id
        })
      });
  } catch (e) {
    res.json({ err: e })
  }
};