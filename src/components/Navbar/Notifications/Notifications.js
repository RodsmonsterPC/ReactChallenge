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
              alt="image"
            />
          </a>
        </div>
      );
}

export default Notifications
