const express = require("express");
const app = express();
const port = 7000;
app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.listen(port, function () {
  console.log("listening on " + port);
});

app.get("/", function (req, res) {
  res.render("index");
});
