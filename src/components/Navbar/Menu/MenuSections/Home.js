import React from "react";
import homeImage from '../../images/home.png'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={homeImage} alt="" />{" "}
        <Link className="nav-link active" aria-current="page" to="index.hmtl" >
          Home
        </Link>
      </li>
    </div>
  );
};

export default Home;
