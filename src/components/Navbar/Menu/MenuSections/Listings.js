import React from "react";
import listingsImage from '../../images/listing.png'

const Listings = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={listingsImage} alt="image" />
        <a className="nav-link active" aria-current="page" href="#">
          Listings
        </a>
      </li>
    </div>
  );
};

export default Listings;
