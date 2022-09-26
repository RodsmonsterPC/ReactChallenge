<<<<<<< HEAD
import React from "react";

const MenuCloseButton = () => {
  return (
    <div>
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
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
=======
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
>>>>>>> master
