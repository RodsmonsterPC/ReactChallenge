import React from "react";
import homeImage from '../../images/home.png'

const Home = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={homeImage} alt="" />{" "}
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
    </div>
  );
};

export default Home;
