import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-modal";

const TeamViewPage = ({ team }) => {
  // const [currentModal, setCurrentModal] = useState({});
  const [userModal, setUserModal] = useState("");
  console.log("team name : ", team);
  //for modals -------------

  // -----------------------
  const [teamDetails, setTeamDetails] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.post("/server/workpackage/getTeamMembers", {
          teamName: team,
        });
        setTeamDetails(res.data);
        console.log(res);
      } catch (error) {
        toast.error("Error in fetching teams");
      }
    }
    getData();
  }, [null]);
  return (
    <div>
      {/* {teamDetails.map((element, index) => {
        return (
          <div key={index}>
            {element.TeamsAndTasks.TeamName}
            <br />
            <button onClick={() => {}}>Open Modal</button>
            {element.TeamsAndTasks.email}
          </div>
        );
      })} */}
    </div>
  );
};

export default TeamViewPage;
