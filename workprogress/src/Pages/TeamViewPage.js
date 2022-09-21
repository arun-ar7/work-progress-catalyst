import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-modal";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";

const TeamViewPage = ({ team }) => {
  const [teamDetails, setTeamDetails] = useState([]);
  useEffect(
    (team) => {
      async function getData() {
        try {
          let res = await axios.post("/server/workpackage/getTeamMembers", {
            teamName: team,
          });

          setTeamDetails(res.data);
        } catch (error) {
          toast.error("Error in fetching teams");
        }
      }
      getData();
    },
    [null]
  );
  return (
    <div>
      <Header />
      {teamDetails.map((element, index) => {
        return (
          <div key={index}>
            {element.TeamsAndTasks.TeamName}
            <br />
            <button onClick={() => {}}>Open Modal</button>
            {element.TeamsAndTasks.email}
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default TeamViewPage;
