import React from "react";
import listImage from '../../images/reading_list.png'

const ReadingList = () => {
  return (
    <div>
      {" "}
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={listImage} alt="img" />
        <a className="nav-link active" aria-current="page">
          Reading List
        </a>
      </li>
    </div>
  );
};

export default ReadingList;
