const jwt = require("jsonwebtoken");

const tokenManagement = {
  generateToken(user) {
    let expiresIn = 86400; //expires in 24 hours
    let token = jwt.sign(user, "secret", { expiresIn: expiresIn });
    return { auth: true, token: token };
  },
};

module.exports = tokenManagement;
