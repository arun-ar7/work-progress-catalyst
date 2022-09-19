const express = require("express");
const router = express.Router();
const catalyst = require("zcatalyst-sdk-node");

router.post("/", (req, res) => {
  var app = catalyst.initialize(req);
  let query = `SELECT  email,TeamName,taskTitle,taskDesctiption,taskDeadLine,taskTotalLevels,taskLevelsCompleted,taskStatus,userRole FROM TeamsAndTasks WHERE TeamName='${req.body.teamName}'`;
  let zcql = app.zcql();
  let zcqlPromise = zcql.executeZCQLQuery(query);
  zcqlPromise
    .then((queryResult) => {
      if (queryResult.length === 0) {
        res.status(400).send("No such data exists");
      }
      res.send(queryResult);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});
module.exports = router;
