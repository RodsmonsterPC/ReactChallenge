import React from "react";
import instagram from '../../images/instagram.png'
import styles from '../MenuSections/menu.module.scss'

const Instagram = () => {
  return (
    <div className={`${styles.smallIcon} ${styles.ig}`}>
      <img src={instagram} alt="image" />
    </div>
  );
};

export default Instagram;
