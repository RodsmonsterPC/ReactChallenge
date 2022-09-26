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

const LikeContext = React.createContext();

export const LikeContextProvider = ({ children }) => {
  const [likes, setLikes] = useState({});

  const switchLike = (id) => {
    if (likes[id]) {
      const newLikes = { ...likes };
      newLikes[id] = undefined;
      setLikes(newLikes);
    } else {
      setLikes({ ...likes, [id]: true });
    }
  };

  const getLike = (id) => {
    return likes[id];
  };
  return (
    <LikeContext.Provider value={{ switchLike, getLike, likes }}>
      {children}
    </LikeContext.Provider>
  );
};
