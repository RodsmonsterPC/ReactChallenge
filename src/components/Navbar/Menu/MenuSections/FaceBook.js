import React from "react";
import facebook from '../../images/Facebook.png'
import styles from '../MenuSections/menu.module.scss'

const FaceBook = () => {
  return (
    <div className={`${styles.smallIcon} ${styles.fb}`}>
      <img src={facebook} alt="image" />
    </div>
  );
};

export default FaceBook;
