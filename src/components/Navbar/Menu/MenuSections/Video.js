import React from "react";
import videoImage from '../../images//videos.png'

const Video = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={videoImage} alt="image" />{" "}
        <a className="nav-link active" aria-current="page" href="#">
          Videos
        </a>
      </li>
    </div>
  );
};

export default Video;
