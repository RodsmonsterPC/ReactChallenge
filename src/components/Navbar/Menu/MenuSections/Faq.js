import React from "react";
import faqImage from '../../images/faq.png'

const Faq = () => {
  return (
    <div>
      <li className="nav-item d-flex align-items-center justify-content-start">
        <img src={faqImage} alt="" />{" "}
        <a className="nav-link active" aria-current="page">
          FAQ
        </a>
      </li>
    </div>
  );
};

export default Faq;
