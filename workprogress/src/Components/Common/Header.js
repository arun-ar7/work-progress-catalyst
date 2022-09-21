import "./common.css";
import React from "react";
import { useValues } from "../../context/ValueContext";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useValues();
  return (
    <div className="Header">
      <div className="headLeft"></div>
      <div className="headCenter">WorkProgressPortal</div>
      <div className="headRight">
        {!isLoggedIn ? (
          <button
            style={{
              width: "100px",
              backgroundColor: "red",
              border: "none",
              color: " white",
              cursor: "pointer",
              height: "25px",
              borderRadius: "5px",
            }}
          >
            Login
          </button>
        ) : (
          <button
            style={{
              width: "100px",
              backgroundColor: "red",
              border: "none",
              color: " white",
              cursor: "pointer",
              height: "25px",
              borderRadius: "5px",
            }}
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
