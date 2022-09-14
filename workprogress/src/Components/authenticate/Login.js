import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import catalyst from "zcatalyst-sdk-node";
// import catalyst from "zcatalyst-sdk-node";

const axios = require("axios");

const Login = () => {
  // functions
  // function signupAction() {
  //   //Get the details of the user from the HTML page
  //   var firstName = document.getElementById("firstname").value;
  //   var lastName = document.getElementById("lastname").value;
  //   var email = document.getElementById("mailid").value;

  //   //Create a JSON to use the details for the user sign-up
  //   var data = {
  //     first_name: firstName,
  //     last_name: lastName,
  //     email_id: email,
  //     platform_type: "web",
  //   };
  //   var auth = catalyst.auth;

  //   //The signup method will sign up the user with the specified data
  //   var signupPromise = auth.signUp(data);
  // }

  // function forgotPassword() {
  //   debugger;
  //   //Get the email address of the user from the HTML page
  //   var email = document.getElementById("emailid").value;

  //   //Create a JSON to use the user details for the password reset
  //   var data = {
  //     email_id: email,
  //     platform_type: "web",
  //     redirect_url: "https://" + document.domain + "/app/index.html",
  //   };
  //   //The forgot password method with the user data will send a reset password link to the users email
  //   var userManagement = catalyst.userManagement;
  //   var forgotPromise = userManagement.forgotPassword(data);
  //   forgotPromise
  //     .then((response) => {
  //       //If the password reset is successful, the user will be asked to check their email
  //       document.body.innerHTML =
  //         "A password reset email has been sent to your email address";
  //       setTimeout(function () {
  //         location.reload();
  //       }, 5000);
  //     })
  //     .catch((err) => {
  //       //If the password reset is not successful, this alert will be displayed
  //       console.log(err);
  //       alert("Try again after some time");
  //       location.reload();
  //     });
  // }

  // function showProfile() {
  //   //The catalyst.auth.isUserAuthenticated() method allows only authenticated users, i.e., the users who are logged in, to access the pages
  //   //You can load this method in the body of your page to allow only authenticated users to access a particular page
  //   catalyst.auth
  //     .isUserAuthenticated()
  //     .then((result) => {
  //       //If the user is logged in, these contents of the page will be displayed to the user
  //       document.body.style.visibility = "visible";
  //       var first_name = "First Name: " + result.content.first_name;
  //       document.getElementById("fname").innerHTML = first_name;
  //       var last_name = "Last Name: " + result.content.last_name;
  //       document.getElementById("lname").innerHTML = last_name;
  //       var mailid = "Email Address: " + result.content.email_id;
  //       document.getElementById("mailid").innerHTML = mailid;
  //       var tzone = "Time Zone: " + result.content.time_zone;
  //       document.getElementById("tzone").innerHTML = tzone;
  //       var created_time = " Joined On: " + result.content.created_time;
  //       document.getElementById("ctime").innerHTML = created_time;
  //     })
  //     .catch((err) => {
  //       //If the user is not logged in, this will be displayed to the user and they will be redirected to the login page
  //       document.body.style.visibility = "visible";
  //       document.body.innerHTML =
  //         "You are not logged in. Please log in to continue. Redirecting you to the login page..";
  //       setTimeout(function () {
  //         window.location.href = "index.html";
  //       }, 5000);
  //     });
  // }

  // function logout() {
  //   //The signOut method is used to sign the user out of the application
  //   var redirectURL = "https://" + document.domain + "/app/index.html";
  //   console.log(redirectURL);
  //   debugger;
  //   var auth = catalyst.auth;
  //   auth.signOut(redirectURL);
  // }

  // function showDiv(value) {
  //   var value = value;
  //   var logindiv = document.getElementById("login");
  //   var signupdiv = document.getElementById("signup");
  //   var forgotpwddiv = document.getElementById("forgotpwd");
  //   var buttonsdiv = document.getElementById("buttons");

  //   if (value == "pwd") {
  //     logindiv.style.display = "none";
  //     signupdiv.style.display = "none";
  //     forgotpwddiv.style.display = "block";
  //     buttonsdiv.style.display = "none";
  //   } else if (value == "signup") {
  //     logindiv.style.display = "none";
  //     signupdiv.style.display = "block";
  //     forgotpwddiv.style.display = "none";
  //     buttonsdiv.style.display = "none";
  //   }
  // }

  // end of functions
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const f_name = useRef("");
  const l_name = useRef("");
  const email = useRef("");
  const password = useRef("");

  async function doPostRequest() {
    console.log("executing");
    let payload = {
      email: email.current,
      password: password.current,
      lastname: l_name.current,
      firstname: f_name.current,
    };

    let res = await axios.post("/server/workpackage/adduser", payload);

    let data = res.data;
    if (data != null) {
      setIsLoggedIn(true);
    }
    console.log(data);
  }
  return (
    <div>
      <form method="post">
        <input
          type="text"
          name="f_name"
          onChange={(e) => {
            f_name.current = e.target.value;
          }}
          placeholder="First Name"
        />
        <input
          type="text"
          name="f_name"
          onChange={(e) => {
            l_name.current = e.target.value;
          }}
          placeholder="Last name"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            email.current = e.target.value;
          }}
        />
        <input
          type="password"
          name="email"
          onChange={(e) => {
            password.current = e.target.value;
          }}
          placeholder="Password"
        />
        <input type="button" value="Login" onClick={doPostRequest} />
        <div>
          <FcGoogle />
          <input
            id="Login"
            // onClick={onGoogleSignIn}
            type="button"
            value="Signin with google"
          />
        </div>
      </form>
      <div id="login"></div>
      <div id="signup"></div>
      <div id="forgotpwd"></div>
    </div>
  );
};

export default Login;

// const signInWithProvider = async (provider) => {
//   try {
//     const { additionalUserInfo, user } = await catalyst.auth.signInWithPopup(
//       provider
//     );
//   } catch (e) {
//     console.log("error in authentication");
//     window.alert(e.message);
//   }
// };
// const onGoogleSignIn = () => {
//   signInWithProvider(new catalyst.auth.GoogleAuthProvider());
// };
