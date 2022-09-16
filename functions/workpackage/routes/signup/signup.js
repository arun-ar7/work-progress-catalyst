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
  // // program for creating user
  // let registerPromise = userManagement.registerUser(signupConfig, {
  //   first_name: req.body.firstname,
  //   last_name: req.body.lastname,
  //   email_id: req.body.email,
  //   role_id: "1733000000008016",
  // }); //Pass the JSON configration to the method
  // ------------------------------------
  // inserting to table
  let datastore = app.datastore();
  let tablePromise = datastore.getTableDetails("UserDetails");
  let table = datastore.table("UserDetails");
  let columnPromise = table.getColumnDetails("f_name");
  columnPromise.then((column) => {
    console.log(column);
  });
  // registerPromise
  //   .then((userDetails) => {
  //     console.log("userDetails : ", userDetails);
  //     //Returns a promise
  //     res.send(userDetails);
  //   })
  //   .catch((err) => {
  //     console.log("error : ", err);
  //     res.status(404).send(err);
  //   });
  //---------------------------------
  res.send("HI");
});

module.exports = router;
