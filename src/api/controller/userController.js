const database = require("../../config/database");
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");
const generatePassword = require("../../helper/password");
const userModel = require("../model/userModel");
const formatDate = require("../../helper/formatDate");

const login = async (request, response, next) => {
  const { username, password } = request.body;

  const userData = await userModel.getUser(username);

  console.log(userData);

  if (userData != null) {
    _username = userData.user_name;
    _password = userData.user_password;

    const login = await bcrypt.compare(password, _password);

    if (username == _username && (await login) == true) {
      response.json({ type: "success" });
    } else {
      response.json({ type: "failed" });
    }
  } else {
    response.json({ type: "user not found" });
  }
};

const signup = async (request, response, next) => {
  const { username, password } = request.body;

  const hash = await generatePassword(password, 10);

  const date = formatDate(Date.now());

  await database.query(
    `INSERT INTO user (user_id, user_name, user_password, created_at) VALUES ('${uuid()}', '${username}', '${hash}', '${date}');`
  );

  response.json({ type: "success" });
};

module.exports = {
  login,
  signup,
};
