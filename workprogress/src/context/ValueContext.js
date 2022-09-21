import React, { createContext, useContext, useEffect, useState } from "react";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [role, setRole] = useState("");
  const [fName, setFName] = useState("");
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
