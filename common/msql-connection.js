const Sequelize = require("sequelize");
const config = require("../config.js");

const SEQUELIZE_CONFIG = new Sequelize(
  config.MSSQL_DATABASE,
  config.MSSQL_USER,
  config.MSSQL_PASSWORD,
  {
    host: config.MSSQL_HOST,
    dialect: "mssql",
    define: { freezeTableName: true, timestamps: false },
  }
);

SEQUELIZE_CONFIG.authenticate()
  .then(() => {
    console.log("Connection has been established successfully."); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err); // eslint-disable-line no-console
  });

SEQUELIZE_CONFIG.defineModel = (tableName, fields) => {
  return SEQUELIZE_CONFIG.define(tableName, { ...fields });
};

module.exports = SEQUELIZE_CONFIG;
