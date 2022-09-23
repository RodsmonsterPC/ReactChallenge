import styles from "./AsideRight.module.scss";

const AsideRight = () => {
  return (
    <aside className="col-md-4 col-xs-12 col-xl-4  justify-content-end  order-3">
      <div className="card">
        <span
          className={`${styles.border2} border border-dark bg-black rounded-top`}
        ></span>
        <div className="bg-light card-body pt-0">
          <div className={`d-flex ${styles.imageDocument}`}>
            <img
              className={`${styles.targetUsr} me-2 mb-2`}
              src="images/b5d7d157-a9a4-420e-b0ba-beaa4e843d7e.webp"
              alt=""
            />
            <h5 className="card-title pt-4">Aditya Oberai</h5>
          </div>
          <div className="d-grid gap-2">
            <button
              className={`${styles.follow2} btn btn-primary mb-3`}
              type="button"
            >
              Follow
            </button>
          </div>
          <p className="card-text">
            Loves everything hackathons and communities ❤
          </p>

          <h6>LOCATION</h6>

          <p>India</p>

          <h6>EDUCATION</h6>

          <p>Amity University, Noida</p>

          <h6>WORK</h6>

          <p>Developer Advocate @ Appwrite</p>

          <h6>JOINED</h6>

          <p>6 oct 2019</p>
        </div>
      </div>
      <div className="mt-4">
        <ul className="list-group">
          <li className="list-group-item bg-light ">
            <h5>
              More from{" "}
              <a className="link-title" href="google.com">
                Aditya Oberai
              </a>
            </h5>
          </li>
          <li className="list-group-item bg-light">
            Launching the State of the Appwrite Community Survey
            <br />
            <small>#react #usestate #hook #javascript</small>
          </li>
          <li className="list-group-item bg-light">
            Becoming a Better Developer Through Open Source
            <br />
            <small>#webdev #webgistechnology #geolocation</small>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideRight;
