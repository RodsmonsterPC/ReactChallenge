import styles from '../Profile/profile.module.scss'
import profileimage from '../images/avatar_people_adult_man_icon_159129.png'
import Dropdown from 'react-bootstrap/Dropdown';
const Profile = () => {
  return (
    <>
    <div>
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        <img
          className="border border-dark rounded-circle "
          src={profileimage}
          alt="image"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">BastianBV</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Create Post</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Reading list</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sing Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </>
  );
};
export default Profile;
