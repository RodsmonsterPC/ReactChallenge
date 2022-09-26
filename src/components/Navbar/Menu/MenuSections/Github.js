import React from "react";
import github from '../../images/Github.png'
import styles from '../MenuSections/menu.module.scss'


const Github = () => {
  return (
    <div className={`${styles.smallIcon} ${styles.git}`}>
      <img src={github} alt="img" />
    </div>
  );
};

export default Github;
