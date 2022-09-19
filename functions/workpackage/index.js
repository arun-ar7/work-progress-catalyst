const express = require("express");
const app = express();
var catalyst = require("zcatalyst-sdk-node");
const signup = require("./routes/signup/signup");
const login = require("./routes/login/login");
const getLeadTeams = require("./routes/team/getLeadTeams");
const getMemTeams = require("./routes/team/getMemTeams");
const getCompleteTeam = require("./routes/details/completeTeam");
const getAllTeams = require("./routes/team/getAllTeams");
const getUserDetails = require("./routes/details/userDetails");
const getTeamMembers = require("./routes/details/teamMembers");

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    hello: "this is the value",
  });
});

app.use("/user/signup", signup);
app.use("/user/login", login);
app.use("/getLeadTeams", getLeadTeams);
app.use("/getMembTeams", getMemTeams);
app.use("/getCompleteTeam", getCompleteTeam);
app.use("/getAllTeams", getAllTeams);
app.use("/getTeamMembers", getTeamMembers);
app.use("/getUser", getUserDetails);

module.exports = app;
