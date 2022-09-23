import React from "react";
import contactImage from '../../images/contact.png'

const Contact = () => {
  return (
    <div>
      <li className="nav-item  d-flex align-items-center justify-content-start">
        <img src={contactImage} alt="" />{" "}
        <a className="nav-link active" aria-current="page">
          Contact
        </a>
      </li>
    </div>
  );
};

export default Contact;
