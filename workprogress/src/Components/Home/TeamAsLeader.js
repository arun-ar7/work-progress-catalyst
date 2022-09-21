import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { toast } from "react-toastify";
import { useValues } from "../../context/ValueContext";
import { Link } from "react-router-dom";

const TeamAsLeader = () => {
  const { userEmail } = useValues();
  const [teamsAsLeader, setTeamsAsLeader] = useState([]);
  const [teamsAsMember, setTeamsAsMember] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.post("/server/workpackage/getLeadTeams", {
          email: userEmail,
        });
        setTeamsAsLeader(res.data);
      } catch (error) {
        toast.error("Error in fetching teams");
      }
      //   member fetch
      try {
        let res = await axios.post("/server/workpackage/getMembTeams", {
          email: userEmail,
        });
        setTeamsAsMember(res.data);
      } catch (error) {
        toast.error("Error in fetching teams");
      }
    }
    getData();
  }, [null]);
  return (
    <>
      <div className="LeaderTeamContainer">
        <h2>Your Team (you as leader)</h2>
        <ul>
          {teamsAsLeader.map((element, index) => {
            return (
              <li key={index} className="LeaderTeamList">
                <Link
                  to={`/app/${element.TeamnamesAndMembers.TeamName}`}
                  style={{ height: "30px" }}
                >
                  {element.TeamnamesAndMembers.TeamName}
                </Link>
              </li>
            );
          })}
          <li className="LeaderTeamList">
            <AiFillPlusSquare />
          </li>
        </ul>
      </div>
      <div>
        <h2>You as a Member</h2>
        <ul>
          {teamsAsMember.map((element, index) => {
            return (
              <li key={index} className="LeaderTeamList">
                <Link to={`/app/${element.TeamnamesAndMembers.TeamName}`}>
                  {element.TeamnamesAndMembers.TeamName}
                </Link>
              </li>
            );
          })}
          <li className="LeaderTeamList">
            <AiFillPlusSquare />
          </li>
        </ul>
      </div>
    </>
  );
};

export default TeamAsLeader;
