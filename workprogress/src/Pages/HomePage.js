import "./styles/HomePage.css";
import React from "react";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import Home from "../Components/Home/Home";

const HomePage = () => {
  return (
    <div className="HomeContainer">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default HomePage;
