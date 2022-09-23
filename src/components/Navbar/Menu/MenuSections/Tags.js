import React from "react";
import tagsImage from '../../images/tags.png'

const Tags = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={tagsImage} alt="img" />{" "}
        <a className="nav-link active" aria-current="page">
          Tags
        </a>
      </li>
    </div>
  );
};

export default Tags;
