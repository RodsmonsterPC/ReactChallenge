import React, { useState, useContext } from "react";
// import { getUserFromLS, saveUserInLS } from "../lib/loginHelpers";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser]=useState(null)
  const login = (user, password) => {

    if (user === "luis.e.ramirez.t@hotmail.com" && password === "lert") {

      const token = "LERT12345";
      // const userData = { name: "Eduardo", email: "eduardo.kodemia@gmail.com", role: "admin"}
      setUser({ token });
      return true;
    }
    else {
      return false;
    }
  };

  console.log('user', user)
  return (
    <UserContext.Provider value={{ login, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext)