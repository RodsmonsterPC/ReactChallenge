import React, { useState } from "react";

const IdContext = React.createContext();

export const IdContextProvider = ({ children }) => {
  const [id, setId] = useState();

  const changeId = (id) => {
    setId(id);
  };

  return (
    <IdContext.Provider value={{ id, changeId }}>{children}</IdContext.Provider>
  );
};

export default IdContext;
