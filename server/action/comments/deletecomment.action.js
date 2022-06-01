const connection = require('../../services/db')

module.exports = async (req, res) => {
  try {
    const id = req.body.comment_id
    connection.query(`delete from comments WHERE comment_id=${id};`, function (error) {
      if (error) {
        res.end('error');
        throw error;
      }
    });
    res.end('comment deleted');
  } catch (e) {
    res.json({ error: e })
  }
};