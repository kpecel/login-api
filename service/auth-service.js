const HttpStatus = require("http-status-codes").StatusCodes;
const { Op } = require("sequelize");

const authService = (() => {
  const login = (req) => {
    return new Promise((resolve, reject) => {
      let body = req.body;
      if (body) {
        return resolve("Valid Api");
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
