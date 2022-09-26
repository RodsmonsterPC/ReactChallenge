import React from "react";
import listingsImage from "../../images/listing.png";

const Listings = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={listingsImage} alt="img" />
        <a className="nav-link active" aria-current="page">
          Listings
        </a>
      </li>
    </div>
  );
};

export default Listings;
