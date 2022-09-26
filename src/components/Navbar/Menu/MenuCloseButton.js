import React from "react";
import styles from './Menu.module.scss'
const MenuCloseButton = () => {
  return (
    <div className={`${styles.closeButton}`}>
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
        DEV Community
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default MenuCloseButton;
