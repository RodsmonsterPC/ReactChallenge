import React from "react";
import podcastImage from "../../images/podcasts.png";

const Podcast = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={podcastImage} alt="img" />
        <a className="nav-link active" aria-current="page" >
          Podcasts
        </a>
      </li>
    </div>
  );
};

export default Podcast;
