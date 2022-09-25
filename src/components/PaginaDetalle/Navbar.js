import styles from "./PaginaDetalle.module.scss";
import Devto from "./Images/dev_to_icon_136699.png";
const Navbar = () => {
  return (
    <nav>
      <nav className={`${styles.navbar} fixed-top border-bottom p-0 `}>
        <div
          className={`container-fluid d-flex justify-content-md-between ${styles.containerNav}`}
        >
          <div className="d-flex ">
            <a href="/index.html">
              <img className="" src={Devto} alt="" />
            </a>
            Edit Post
          </div>
          <button
            type="button"
            className={`${styles.btnClose}`}
            aria-label="Close"
          ></button>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
