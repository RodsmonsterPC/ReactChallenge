import React from "react";

const ReadingList = () => {
  return (
    <div>
      {" "}
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src="images/achive.png" alt="" />
        <a className="nav-link active" aria-current="page" href="#">
          Reading List
        </a>
      </li>
    </div>
  );
};

export default ReadingList;
