const connection = require('../../services/db')

module.exports = async (req, res) => {
  try {
    const id = req.params.id
  const { title, text, img_url } = req.body;
  connection.query(`update posts SET title="${title}", text="${text}", img_url="${img_url}" WHERE post_id=${id};`, function (error) {
    if (error) { 
      res.end('error');
      throw error;
    }
  });
  res.end('post updated');
  } catch (e) {
    res.json({ error: e })
  }
};