const connection = require('../../services/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = async (req, res) => {
  
  try {
    const email = req.body.email;//GET EMAIL FROM BODY
    const passwordFromClient = req.body.password;//GET PASSWORD FROM BODY
    if (!(email || passwordFromClient)) {// IF MISSED EMAIl OR PASSWORD RETURN ERROR STOP PROGRAM
      res.status(400).send("All input required");
    }
    
    connection.query(
      `select email, password from users where email="${email}"`,
      function (error, result) {

        if (error) {
          throw error;// IF SQL WITH ERROR STOP PROGRAM
        }

        const passwordInDB = result[0].password;

        bcrypt.compare(passwordFromClient, passwordInDB, function (err, result) {
          if (!result) {
            res.status(400).send("Bad credentials");
          } 
          const accessToken = jwt.sign({ username: email }, process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );

          res.cookie('refreshToken', accessToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
          })

          res.status(200).json({
            accessToken
          });;  //SEND BACK TO CLIEN RESPONSE FROM DB 
        });

      });

  } catch (e) {
    res.json({ err: e })
  }
};