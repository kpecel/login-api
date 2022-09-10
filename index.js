const express = require("express");
const cors = require("cors");
const route = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    limit: "50mb",
    parameterLimit: 5000000,
  })
);

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api", route);

app.listen(PORT);
