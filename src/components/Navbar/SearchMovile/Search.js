import React from "react";
import searchIcon from '../images/search.png'
const Search = () => {
  return (
    <div>
      <a href="#">
        <img
          className="m-3 p-1 d-md-none"
          src={searchIcon}
          alt="image"
        />
      </a>
    </div>
  );
};

export default Search;
