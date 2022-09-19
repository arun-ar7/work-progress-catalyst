import React from "react";
import { useValues } from "../../context/ValueContext";

const Header = () => {
  const { isLoggedIn } = useValues();
  return (
    <div>
      <div className="headLeft"></div>
      <div className="headCenter">WorkProgressPortal</div>
      <div className="headRight">
        {!isLoggedIn ? <button>Login</button> : <button>Logout</button>}
      </div>
    </div>
  );
};

export default Header;
