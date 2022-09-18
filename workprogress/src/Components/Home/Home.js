import React from "react";
import { useValues } from "../../context/ValueContext";
import TeamAsLeader from "./TeamAsLeader";

const Home = () => {
  const { fName, userEmail, role } = useValues();
  return (
    <>
      <h3>{fName}</h3>
      <h4>{userEmail}</h4>
      <h5>{role}</h5>
      <TeamAsLeader />
    </>
  );
};

export default Home;
