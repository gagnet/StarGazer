const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/newuser", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/newuser.html"));
});
app.get("/bootstrap", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/bootstrap.html"));
});

// const handleRequest = (req, res) => {
//   //   console.log(req.url);
//   if (req.url === "/newuser") {
//     displaynewuser(res);
//   } else if (req.url === "/bootstrap") {
//     displayBootstrap(res);
//   } else if (req.url === "/") {
//     displayIndex(res);
//   }
// };

// const server = http.createServer(handleRequest);
