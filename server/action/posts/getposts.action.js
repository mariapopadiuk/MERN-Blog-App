const connection = require('../../services/db')

module.exports = async (req, res) => {
  try {
    connection.query('select * from posts', function (error, result) {
      if (error) throw error;
      return res.send(result );
    }); 
  } catch(e) {
    res.json({ error: e })
  }
};
