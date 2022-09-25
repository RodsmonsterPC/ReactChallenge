import styles from "./AsideRight.module.scss";

const AsideRight = () => {
  return (
    <aside className={`${styles.asideRight} col-8 `}>
      <div className="card">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--lh_J2TaC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://forem.dev/remoteimages/uploads/articles/f7nihr3z8nacgyb8ptrn.png"
          className="card-img-top"
          alt="..."
        />
        <div className={`${styles.cardBody}`}>
          <a className="link-top" href="#">
            <h5>Forem Android app is here</h5>
          </a>
        </div>
      </div>
      <ul className="list-group pt-3">
        <li className="list-group-item p-3 d-flex justify-content-between">
          <h5>Listings</h5>{" "}
          <small>
            <a className="link-top" href="#">
              See all
            </a>
          </small>
        </li>
        <li className="list-group-item">
          {" "}
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Get paid to talk about using Fauna
          </a>{" "}
          <br />
          <small>Collabs</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Frontend developer ready for some summer works{" "}
          </a>{" "}
          <br />
          <small>forhire</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="">
            Can Translate your posts from English to Spanish
          </a>{" "}
          <br />
          <small>forhire</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            For Hire Full Stack Dev
          </a>{" "}
          <br />
          <small>forhire</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Need an experienced Technical Writer?
          </a>{" "}
          <br />
          <small>forhire</small>
        </li>
        <li className="list-group-item d-flex justify-content-center">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            <small>Create a listing</small>
          </a>{" "}
        </li>{" "}
        <br />
      </ul>
      <ul className="list-group pt-3">
        <li className="list-group-item">
          <a className="link-top" href="#">
            <h5>#Help</h5>
          </a>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Azure/Dev/AI Journey and beyond!
          </a>{" "}
          <br />
          <button className={`${styles.notify}`}>New</button>
        </li>
      </ul>
      <ul className="list-group pt-3">
        <li className="list-group-item">
          <a className="link-top" href="#">
            <h5>#discusss</h5>
          </a>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Q: As a #CodeNewbie, what are your learning goals for the next
            #30Days?
          </a>{" "}
          <br />
          <small>20 comments</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            What's the difference between a library and a framework?
          </a>{" "}
          <br />
          <small>18 comments</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Composition api or Options api?
          </a>{" "}
          <br />
          <small>1 comment</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            What was your mistakes in your career path?
          </a>{" "}
          <br />
          <small>33 comments</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            What is your morning routine?
          </a>{" "}
          <br />
          <small>3 comments</small>
        </li>
      </ul>
      <ul className="list-group pt-3">
        <li className="list-group-item">
          <a className="link-top" href="#">
            <h5>#explainlikeimfive</h5>
          </a>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Explain Kubernetes to me like I'm Five
          </a>{" "}
          <br />
          <small>24 comments</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            What's the difference between Front-end and Back-end development?
          </a>{" "}
          <br />
          <small>32 comments</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Explain React Hooks Like I'm Five
          </a>{" "}
          <br />
          <small>6 comments</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            How to add code highlighting to your Dev.to posts.
          </a>{" "}
          <br />
          <small>6 comments</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Explain Docker Like I am Five
          </a>{" "}
          <br />
          <small>9 comments</small>
        </li>
      </ul>
      <ul className="list-group pt-3">
        <li className="list-group-item d-flex justify-content-between">
          <a className="link-top" href="#">
            <h5>#challenge</h5>
          </a>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            The Kramer Method
          </a>{" "}
          <br />
          <small>1 comment</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            SSTIC 2022 - Symposium sur la sécurité des technologies de
            l'information et des communications
          </a>{" "}
          <br />
          <button className={`${styles.notify}`}>New</button>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Python exercise 12: find the hidden ball
          </a>{" "}
          <br />
          <button className={`${styles.notify}`}>New</button>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Making Software Engineering Interviews more Creative and Interesting
          </a>{" "}
          <br />
          <button className={`${styles.notify}`}>New</button>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Day 4/30 Days of CodeWars: JavaScript Edition
          </a>{" "}
          <br />
          <button className={`${styles.notify}`}>New</button>
        </li>
      </ul>
      <ul className="list-group pt-3">
        <li className="list-group-item d-flex justify-content-between">
          <a className="link-top" href="#">
            <h5>#meta</h5>
          </a>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            A Second Walk Through of Composing a SQL Query
          </a>{" "}
          <br />
          <small>5 comments</small>
        </li>
      </ul>
      <ul className="list-group pt-3">
        <li className="list-group-item d-flex justify-content-between">
          <a className="link-top" href="#">
            <h5>#watercooler</h5>
          </a>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            The Death of IE (webcomic)
          </a>{" "}
          <br />
          <small>32 comments</small>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            About My Boss...{" "}
          </a>
          <br />
          <button className={`${styles.notify}`}>New</button>
        </li>
        <li className="list-group-item">
          <a className={`${styles.linkTitle} ${styles.linkDev}`} href="#">
            Day 4/30 Days of CodeWars: JavaScript Edition{" "}
          </a>{" "}
          <br />
          <button className={`${styles.notify}`}>New</button>
        </li>
      </ul>
    </aside>
  );
};

export default AsideRight;
