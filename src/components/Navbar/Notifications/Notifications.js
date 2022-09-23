import React from 'react'
import bell from '../images/bell.png'
import styles from '../Notifications/notifications.module.scss'
const Notifications = () => {
    return (
        <div>
          <a href="#">
            <img
              className={`m-3 ${styles.bell}`}
              src={bell}
              alt="img"
            />
          </a>
        </div>
      );
}

export default Notifications
