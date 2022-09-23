import React from "react";

const Home = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src="images/home.png" alt="" />{" "}
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
    </div>
  );
};

export default Home;
