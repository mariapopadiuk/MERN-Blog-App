const connection = require('../../services/db')



module.exports = async (req, res) => {
  try {
    const id = req.params.id
  connection.query(`delete from posts WHERE post_id=${id};`, function (error) {
    if (error) {
      res.end('error');
      throw error;
    }
  });
  res.end('post deleted');
  } catch (e) {
    res.json({ error: e })
  }
};