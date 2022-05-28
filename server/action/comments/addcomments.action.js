const connection = require('../../services/db')

module.exports = async (req, res) => {
  try { 
    const { post_id, text, date_created, user_name } = req.body;
    connection.query(`insert into comments (post_id, text, date_created, user_name) values (${post_id}, '${text}', '${date_created}', '${user_name}');`, function (error) {
      if (error) {
        res.end('error');
        throw error;
      }
    });
    res.end('comment added');
  } catch (e) {
    res.json({ error: e })
  }
};