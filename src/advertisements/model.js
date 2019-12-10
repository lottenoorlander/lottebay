const Sequelize = require("sequelize");
const db = require("../db");

const Advertisement = db.define("advertisement", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  pictureUrl: Sequelize.STRING,
  price: Sequelize.DECIMAL,
  email: Sequelize.STRING,
  phonenumber: Sequelize.INTEGER
});

module.exports = Advertisement;
