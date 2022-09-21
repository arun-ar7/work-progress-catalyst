import React from "react";
import { useValues } from "../../context/ValueContext";
import TeamAsLeader from "./TeamAsLeader";

const Home = () => {
  const { fName, userEmail, role } = useValues();
  return (
    <>
      <div className="HomeGreetings">
        <h3 className="FirstNameDisplay">
          Welcome, <span style={{ color: "red" }}>{fName}</span>
        </h3>
        <h3 className="EmailDisplay">
          <span style={{ color: "red" }}>Email : </span>
          {userEmail}
        </h3>
      </div>
      <TeamAsLeader />
    </>
  );
};

export default Home;
