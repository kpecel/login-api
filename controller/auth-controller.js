const Router = require("express").Router;
const router = Router();
const httpResponse = require("../common/http-response");

const authService = require("../service/auth-service");

router.get("/", (req, res) => {
  res.send("Hello from the Auth Controller");
});

router.post("/", (req, res) => {
  authService
    .login(req)
    .then((user) => {
      httpResponse.successHandler(res, user, "User Information");
    })
    .catch((error) => {
      httpResponse.errorHandler(
        res,
        error,
        "Auth Controller: Error Logging In"
      );
    });
});
module.exports = router;
