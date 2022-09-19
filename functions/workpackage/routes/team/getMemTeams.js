const express = require("express");
const router = express.Router();
const catalyst = require("zcatalyst-sdk-node");

router.post("/", (req, res) => {
  //     const { error } = LoginValidate(req.body);
  //   if (error) return res.status(400).send(error.details[0].message);
  var app = catalyst.initialize(req);
  //--------------------------
  let query = `SELECT  TeamName FROM TeamnamesAndMembers WHERE  member1='${req.body.email}' OR member2='${req.body.email}' OR member3='${req.body.email}' OR member4='${req.body.email}'`;

  let zcql = app.zcql();
  let zcqlPromise = zcql.executeZCQLQuery(query);
  zcqlPromise
    .then((queryResult) => {
      // if (queryResult.length === 0) {
      //   res.status(400).send("No such data exists");
      // }
      res.send(queryResult);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

module.exports = router;
