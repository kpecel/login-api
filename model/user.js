const Sequelize = require("sequelize");
const conn = require("../common/msql-connection");

const user = conn.defineModel("User", {
  userId: {
    type: Sequelize.UUID,
    field: "UserId",
    primaryKey: true,
    defaultvalue: Sequelize.UUIDV4,
    unique: true,
  },
  firstName: {
    type: Sequelize.STRING,
    field: "FirstName",
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    field: "LastName",
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    field: "Email",
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    firld: "Role",
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    field: "Password",
  },
});
module.exports = user;
