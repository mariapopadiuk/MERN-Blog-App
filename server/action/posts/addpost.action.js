const connection = require("../../services/db");

module.exports = async (req, res) => {
  try {
    const { user_id, title, text, date_created, img_url } = req.body;
    connection.query(
      `insert into posts (user_id, title, text, date_created, img_url) values (${user_id}, '${title}', '${text}', '${date_created}', '${img_url}');`,
      function (error) {
        if (error) {
          res.end("error");
          throw error;
        }
      }
    );
    res.end("post added");
  } catch (e) {
    res.json({ error: e });
  }
};
