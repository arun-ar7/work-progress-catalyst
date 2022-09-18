import React, { createContext, useContext, useEffect, useState } from "react";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userEmail, setUserEmail] = useState("arunsmart1202@gmail.com");
  const [role, setRole] = useState("Leader");
  const [fName, setFName] = useState("Arun");
  useEffect(() => {}, []);

  return (
    <ValueContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userEmail,
        setUserEmail,
        role,
        setRole,
        fName,
        setFName,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export const useValues = () => useContext(ValueContext);
