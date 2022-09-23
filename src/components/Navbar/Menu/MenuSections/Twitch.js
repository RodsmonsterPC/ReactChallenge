import React from "react";
import twitch from '../../images/Twitch.png'
import styles from '../MenuSections/menu.module.scss'

const Twitch = () => {
  return (
    <div className={`${styles.smallIcon} ${styles.dis}`}>
      <img src={Twitch} alt="image" href="#" />
    </div>
  );
};

export default Twitch;
