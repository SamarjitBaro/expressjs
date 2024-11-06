const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("/file.html", { root: "./views" });
});
app.get("/about", (req, res) => {
  res.sendFile("/about.html", { root: "./views" });
});

app.use((req, res) => {
  res.status(404).sendFile("/404.html", { root: "./views" });
});
