const { LoginValidate } = require("../../models/LoginUser");
const express = require("express");
const catalyst = require("zcatalyst-sdk-node");
const router = express.Router();

var signupConfig = {
  platform_type: "web",
  zaid: 50010564402,
};

router.post("/", (req, res) => {
  const { error } = LoginValidate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  var app = catalyst.initialize(req);
  //--------------------------
  let query = `SELECT f_name, l_name, userId, email, password FROM UserDetails where email='${req.body.email}'`;

  let zcql = app.zcql();
  let zcqlPromise = zcql.executeZCQLQuery(query);
  zcqlPromise.then((queryResult) => {
    if (queryResult[0].UserDetails.password === req.body.password) {
      queryResult[0].UserDetails.password = undefined;
      res.send(queryResult[0]);
    } else {
      res.status(403).send("LoginFailed");
    }
  });
});

module.exports = router;
