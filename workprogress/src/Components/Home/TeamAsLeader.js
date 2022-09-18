import axios from "axios";
import React, { useEffect, useState } from "react";
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
        console.log(res);
      } catch (error) {
        toast.error("Error in fetching teams");
      }
      //   member fetch
      try {
        let res = await axios.post("/server/workpackage/getMembTeams", {
          email: userEmail,
        });
        setTeamsAsMember(res.data);
        console.log(res);
      } catch (error) {
        toast.error("Error in fetching teams");
      }
    }
    getData();
  }, [null]);
  return (
    <>
      <div>
        You as a Leader
        <ul>
          {teamsAsLeader.map((element, index) => {
            return (
              <li key={index}>
                <Link to={`/app/${element.TeamnamesAndMembers.TeamName}`}>
                  {element.TeamnamesAndMembers.TeamName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        You as a Member
        <ul>
          {teamsAsMember.map((element, index) => {
            return (
              <li key={index}>
                <Link to={`/app/${element.TeamnamesAndMembers.TeamName}`}>
                  {element.TeamnamesAndMembers.TeamName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TeamAsLeader;
