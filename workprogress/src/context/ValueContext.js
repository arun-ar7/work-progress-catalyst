import React, { createContext, useContext, useEffect, useState } from "react";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {}, []);

  return (
    <ValueContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export const useValues = () => useContext(ValueContext);
