import React from "react";
import "./styles/authenticateStyle.css";
import Login from "../Components/authenticate/Login";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";

const AuthenticatePage = () => {
  return (
    <div className="authentication-containers">
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default AuthenticatePage;
