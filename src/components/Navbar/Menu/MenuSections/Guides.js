import React from "react";
import guidesImage from '../../images/guides.png'
import styles from '../MenuSections/menu.module.scss'
const Guides = () => {
  return (
    <div>
      <li className="nav-item  d-flex align-items-center justify-content-start">
        <img className={`${styles.guides}`} src={guidesImage} alt="" />{" "}
        <a className="nav-link active" aria-current="page">
          Guides
        </a>
      </li>
    </div>
  );
};

export default Guides;
