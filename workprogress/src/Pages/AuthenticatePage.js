import React from "react";
import "./styles/authenticateStyle.css";
import Login from "../Components/authenticate/Login";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";

const AuthenticatePage = () => {
  return (
    <>
      <Header />
      <div className="authentication-containers">
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default AuthenticatePage;
