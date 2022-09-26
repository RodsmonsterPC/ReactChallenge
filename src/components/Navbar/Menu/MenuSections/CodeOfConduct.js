import React from "react";
import Code from '../../images/thumb_up.png'

const CodeOfConduct = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={Code} alt="img" />
        <a className="nav-link active" aria-current="page" >
          Code of Conduct
        </a>
      </li>
    </div>
  );
};

export default CodeOfConduct;
