const { validate } = require("../../models/User");
const express = require("express");
const catalyst = require("zcatalyst-sdk-node");
const router = express.Router();

var signupConfig = {
  platform_type: "web",
  zaid: 50010564402,
};

// var userConfig = {
//   last_name: "Boyle",
//   email_id: "p.boyle@zylker.com",
//   role_id: "1733000000008016",
// };

router.post("/", (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
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
      console.log("userDetails : ", userDetails);
      //Returns a promise
      res.send(userDetails);
    })
    .catch((err) => {
      console.log("error : ", err);
      res.send(err);
    });
});

module.exports = router;
