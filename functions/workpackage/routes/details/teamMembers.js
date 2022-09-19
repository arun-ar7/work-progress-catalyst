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
  let query = `SELECT TeamName,LEmail,member1,member2,member3,member4 FROM TeamnamesAndMembers where teamName='${req.body.team}'`;

  let zcql = app.zcql();
  let zcqlPromise = zcql.executeZCQLQuery(query);
  zcqlPromise.then((queryResult) => {
    res.send(queryResult);
    console.log(queryResult);
  });
});

module.exports = router;
