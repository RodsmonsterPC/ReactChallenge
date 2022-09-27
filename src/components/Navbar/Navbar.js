import Button from "./CreatePostButton/CreatePostButton";
import Menu from "./Menu/Menu";
import Profile from "./Profile/Profile";
import Searcher from "./Searcher/Searcher";
import Search from "./SearchMovile/Search";
import styles from "../Navbar/Navbar.module.scss";
import Notifications from "./Notifications/Notifications";
import MenuButton from "./Menu/MenuButton";
import DevtoIcon from "./DevToIcon/DevtoIcon";
import MenuCloseButton from "./Menu/MenuCloseButton";

const Navbar = ({ token, isLogginIn }) => {
  return (
    <div>
      <header>
        <nav className={`${styles.navbar} navbar fixed-top border-bottom p-0 `}>
          <div
            className={`container-fluid d-flex justify-content-md-between ${styles.containerNav}`}
          >
            <div className="d-flex">
              <MenuButton />
              <DevtoIcon />
              <Searcher />
            </div>

            <div className="d-flex align-items-center">
              <Search />
              {token ? (
                <>
                  <Button link="CreatePost" text="Create Post" />
                  <Notifications />
                  <Profile />
                </>
              ) : (
                !isLogginIn && (
                  <div>
                    <Button link="enter" text="Log in" />{" "}
                    <Button link="newUser" text="Create Account" />
                  </div>
                )
              )}
            </div>

            <div
              className={`offcanvas offcanvas-start ${styles.dropDownItems}`}
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <MenuCloseButton />
              </div>
              <div className="offcanvas-body">
                <Menu />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
