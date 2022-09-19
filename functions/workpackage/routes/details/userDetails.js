const express = require("express");
const catalyst = require("zcatalyst-sdk-node");
const router = express.Router();

var signupConfig = {
  platform_type: "web",
  zaid: 50010564402,
};

router.post("/", (req, res) => {
  var app = catalyst.initialize(req);
  //--------------------------
  let query = `SELECT f_name, l_name, userId, email FROM UserDetails where email='${req.body.email}'`;

  let zcql = app.zcql();
  let zcqlPromise = zcql.executeZCQLQuery(query);
  zcqlPromise.then((queryResult) => {
    res.send(queryResult[0]);
  });
});

module.exports = router;
