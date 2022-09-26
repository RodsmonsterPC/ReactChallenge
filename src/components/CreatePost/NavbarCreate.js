import styles from "./CreatePost.module.scss";
import Devto from "./Images/dev_to_icon_136699.png";
const NavbarCreate = () => {
  return (
    <header className={styles.headerNav}>
      <nav className={`${styles.navbar} fixed-top border-bottom p-0 row`}>
        <div className={`container-fluid d-flex ${styles.containerNav}`}>
          <div className="container-fluid d-flex align-items-center justify-content-md-start">
            <a href="/" className={`${styles.devTo}`}>
              <img className="" src={Devto} alt="" />
            </a>
            <p className={`${styles.textCreate}`}>Create Post</p>
          </div>
          <div className="d-flex align-items-center">
            <li className={`${styles.elipses}`}>
              <button className={`${styles.edit}`}>Edit</button>
            </li>
            <li className={`${styles.elipses}`}>
              <button className={`${styles.preview}`}>Preview</button>
            </li>
            <button
              type="button"
              className={`btn-close ${styles.btnClose}`}
              aria-label="Close"
            ></button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarCreate;
