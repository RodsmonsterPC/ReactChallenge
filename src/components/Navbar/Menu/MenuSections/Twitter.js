import React from "react";
import styles from '../MenuSections/menu.module.scss'
import twitter from '../../images/Twitter.png'
const Twitter = () => {
  return (
    <div className={`${styles.smallIcon} ${styles.tw}`}>
      <img src={twitter} alt="image" />
    </div>
  );
};

export default Twitter;
