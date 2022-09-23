import React from "react";
import eyesImage from '../../images/eyes.png'

const TermsOfUse = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={eyesImage} alt="image" />{" "}
        <a className="nav-link active" aria-current="page" href="#">
          Terms of use
        </a>
      </li>
    </div>
  );
};

export default TermsOfUse;
