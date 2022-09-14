const express = require("express");
const app = express();
var catalyst = require("zcatalyst-sdk-node");
app.use(express.json());

var signupConfig = {
  platform_type: "web",
  zaid: 50010564402,
};

// var userConfig = {
//   last_name: "Boyle",
//   email_id: "p.boyle@zylker.com",
//   role_id: "1733000000008016",
// };

app.get("/", (req, res) => {
  res.send({
    hello: "this is the value",
  });
});
app.post("/adduser", (req, res) => {
  var app = catalyst.initialize(req);
  let userManagement = app.userManagement();
  let registerPromise = userManagement.registerUser(signupConfig, {
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email_id: req.body.email,
    role_id: "1733000000008016",
  }); //Pass the JSON configration to the method

  registerPromise
    .then((userDetails) => {
      //Returns a promise
      res.send(userDetails);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = app;
