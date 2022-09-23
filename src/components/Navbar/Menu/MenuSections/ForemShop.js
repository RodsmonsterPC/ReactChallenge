import React from "react";
import Shop from '../../images/shop.png'

const ForemShop = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={Shop} alt="" />{" "}
        <a className="nav-link active" aria-current="page">
          Forem Shop
        </a>
      </li>
    </div>
  );
};

export default ForemShop;
