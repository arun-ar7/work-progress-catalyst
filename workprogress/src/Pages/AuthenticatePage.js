import React from "react";
import "./styles/authenticateStyle.css";
import Login from "../Components/authenticate/Login";

const AuthenticatePage = () => {
  return (
    <div className="authentication-containers">
      <Login />
    </div>
  );
};

export default AuthenticatePage;
