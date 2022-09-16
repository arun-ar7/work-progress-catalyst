import React, { useRef, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useValues } from "../../context/ValueContext";

const axios = require("axios");

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useValues();
  const [userData, setUserData] = useState({});
  const [showLogin, setShowLogin] = useState(true);

  const f_name = useRef("");
  const l_name = useRef("");
  const email = useRef("");
  const password = useRef("");

  async function doPostRequest() {
    console.log("executing");
    let payload = {
      firstname: f_name.current,
      lastname: l_name.current,
      email: email.current,
      password: password.current,
    };
    try {
      let res = await axios.post("/server/workpackage/user/signup", payload);
      setUserData(res);
      setIsLoggedIn(true);
    } catch (error) {
      toast.error("Try again.....");
      setIsLoggedIn(false);
    }
  }
  async function doLogin() {
    console.log("loggin in");
    let payload = {
      firstname: f_name.current,
      lastname: l_name.current,
      email: email.current,
      password: password.current,
    };
    try {
      let res = await axios.get("/server/workpackage/user/login", payload);
      setUserData(res);
      setIsLoggedIn(true);
    } catch (error) {
      toast.error("Try again.....");
      setIsLoggedIn(false);
    }
  }
  return (
    <div className="authFormContainer">
      <div className="signupform-container">
        <button
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          {`${showLogin ? "SignUp" : "Login"}`}
        </button>
        <form method="post">
          <input
            className={`signupform-inputs ${showLogin ? "login" : ""}`}
            type="text"
            name="f_name"
            onChange={(e) => {
              f_name.current = e.target.value;
            }}
            placeholder="First Name"
          />
          <input
            className={`signupform-inputs ${showLogin ? "login" : ""}`}
            type="text"
            name="l_name"
            onChange={(e) => {
              l_name.current = e.target.value;
            }}
            placeholder="Last name"
          />
          <input
            className={`signupform-inputs `}
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              email.current = e.target.value;
            }}
          />
          <input
            className={`signupform-inputs`}
            type="password"
            name="email"
            onChange={(e) => {
              password.current = e.target.value;
            }}
            placeholder="Password"
          />
          <input
            className={`signupform-inputs ${showLogin ? "login" : ""}`}
            type="button"
            value="Signup"
            onClick={doPostRequest}
          />
          <input
            className={`signupform-inputs ${showLogin ? "" : "login"}`}
            type="button"
            value="Login"
            onClick={doLogin}
          />
        </form>
        <div id="forgotpwd"></div>
      </div>
    </div>
  );
};

export default Login;
