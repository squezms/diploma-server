const database = require("../../config/database");
const { v4: uuid } = require("uuid");

const insertCategory = async (req, res, next) => {
  const { category_name } = req.body;
  await database.query(
    `INSERT INTO category(category_id, category_name) VALUES ('${uuid()}', '${category_name}');`
  );

  res.json({
    type: "success",
  });
};

const getSneakers = async (req, res) => {
  const [rows] = await database.query(`SELECT *
  FROM sneaker.sneaker
  INNER JOIN category as c ON category_code = c.category_id
  INNER JOIN model as m ON model_code = m.model_id
  `);

  res.json(rows[0]);
};

module.exports = {
  insertCategory,
  getSneakers,
};
