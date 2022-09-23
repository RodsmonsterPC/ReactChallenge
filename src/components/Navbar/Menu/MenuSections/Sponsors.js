import React from "react";
import sponsorImage from '../../images/sponsors.png'

const Sponsors = () => {
  return (
    <div>
      <li className="nav-item  d-flex align-items-center justify-content-start">
        <img src={sponsorImage} alt="img" />{" "}
        <a className="nav-link active" aria-current="page" >
          Sponsors
        </a>
      </li>
    </div>
  );
};

export default Sponsors;
