import styles from '../Profile/profile.module.scss'
import profileimage from '../images/avatar_people_adult_man_icon_159129.png'
const Profile = () => {
  return (
    <div className={`dropdown dropstart ${styles.dropStart}`}>
      <a
        className=""
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {" "}
        <img
          className="border border-dark rounded-circle "
          src={profileimage}
          alt="image"
        />
      </a>
      <ul className={`dropdown-menu menu-position2 ${styles.menuDrop}`}aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="#">
            BastianBV
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Dashboard
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Create Post
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Reading list
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Sing Out
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
