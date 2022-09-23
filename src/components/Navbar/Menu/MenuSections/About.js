import React from "react";
import about from '../../images/about.png'
import styles from '../MenuSections/menu.module.scss'
const About = () => {
  return (
    <div>
      <li className="nav-item  d-flex align-items-center justify-content-start">
        <img className='' src={about} id={`${styles.about}`}alt="img" />
        <a className="nav-link active" aria-current="page">
          About
        </a>
      </li>
    </div>
  );
};

export default About;
