const express = require("express");
const app = express();

app.use("/kozz-docs", express.static("build"))
app.use(express.static("build"))

app.listen(3005);
