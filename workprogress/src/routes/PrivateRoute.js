import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useValues } from "../context/ValueContext";
import AuthenticatePage from "../Pages/AuthenticatePage";
// import PageNotFound from "../pages/PageNotFound";

const PrivateRoute = () => {
  const { isLoggedIn, setIsLoggedIn } = useValues();

  return isLoggedIn ? <Outlet /> : <AuthenticatePage />;
};

export const PublicRoute = () => {
  const { isLoggedIn, setIsLoggedIn } = useValues();
  if (isLoggedIn) {
    return <Navigate to="/app/" />;
  }
  return <Outlet />;
};

// export const ProtectedRoute = () => {
//   const { role } = useValues();
//   console.log("value of role : ", role);

//   if (role === "leader") {
//     return <Outlet />;
//   } else {
//     console.log("Donot have the access");
//     return <PageNotFound />;
//   }
// };

export default PrivateRoute;
