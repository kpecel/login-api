const Router = require("express").Router;
const authController = require("./controller/auth-controller");

let router = Router();

router.get("/", (req, res) => {
  res.json("This is Login API");
});

router.use("/login", authController);

module.exports = router;
