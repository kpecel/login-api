const HttpStatus = require("http-status-codes").StatusCodes;
const { Op } = require("sequelize");
const User = require("../model/user");

const tokenManagement = require("../middleware/token-management");

const authService = (() => {
  const login = (req) => {
    return new Promise((resolve, reject) => {
      let body = req.body;
      if (body) {
        if (body.email) body.email = body.email.trim();
        if (body.username) body.username = body.username.trim();

        return User.findOne({
          where: {
            [Op.and]: [
              {
                email: body.username || body.email,
              },
              {
                password: body.password,
              },
            ],
          },
        })
          .then((user) => {
            if (user) {
              let user_data = user.dataValues;
              let response = tokenManagement.generateToken(user_data);
              return resolve(response);
            }
            return reject({
              statusCode: HttpStatus.UNAUTHORIZED,
              message: "Invalid Username or Passowrd",
            });
          })
          .catch((error) => {
            return reject(error);
          });
      } else {
        return reject({
          statusCode: HttpStatus.BAD_REQUEST,
          message: "Invalid Request",
        });
      }
    });
  };

  return {
    login,
  };
})();

module.exports = authService;
