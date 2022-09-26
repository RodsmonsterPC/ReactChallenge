import React from "react";
import  policyImage from '../../images/policy.png'

const PrivacyPolicy = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={policyImage} alt="img" />
        <a className="nav-link active" aria-current="page">
          Privacy Policy
        </a>
      </li>
    </div>
  );
};

export default PrivacyPolicy;
