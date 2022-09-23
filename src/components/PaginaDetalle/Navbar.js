import styles from "./PaginaDetalle.module.scss";
const Navbar = () => {
  return (
    <nav>
      <nav className="navbar fixed-top border-bottom p-0 ">
        <div className="container-fluid d-flex justify-content-md-between container-nav">
          <div className="d-flex ">
            <a href="/index.html">
              <img className="" src="./images/dev_to_icon_136699.png" alt="" />
            </a>
            Edit Post
          </div>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
