const connection = require('../../services/db')


module.exports = async (req, res) => {
  const id = req.params.id
  try {
    connection.query(`select * from posts where post_id=${id}`, function (error, result) {
     if (error) throw error;
     res.send(result)
   });
  } catch (e) {
    res.json({ error: e })
  }
};
