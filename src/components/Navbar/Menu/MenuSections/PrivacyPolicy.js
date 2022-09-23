import React from "react";
import  policyImage from '../../images/policy.png'

const PrivacyPolicy = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={policyImage} alt="image" />
        <a className="nav-link active" aria-current="page" href="#">
          Privacy Policy
        </a>
      </li>
    </div>
  );
};

export default PrivacyPolicy;
