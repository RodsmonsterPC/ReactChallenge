import CreatePostButton from './CreatePostButton/CreatePostButton';
import Menu from './Menu/Menu'
import Profile from './Profile/Profile';
import Searcher from './Searcher/Searcher';
import Search from './SearchMovile/Search';
import styles from '../Navbar/Navbar.module.scss'
import devto from '../Navbar/images/Devto.png'
import Notifications from './Notifications/Notifications';
const Navbar = () => {
  return (
    <div>
      <header>
        <nav className={`${styles.navbar} navbar fixed-top border-bottom p-0 `}>
          <div className={`container-fluid d-flex justify-content-md-between ${styles.containerNav}`}>

            <div className="d-flex ">
              
            {/* <Menu /> */}
            <a href="/index.html">
                <img src={devto} alt="image" />
              </a>
             <Searcher/>
            </div>
           
            <div className="d-flex align-items-center"> 
             <Search/>
             <CreatePostButton />
            <Notifications/>
             <Profile/>
            </div>

            <div
              className="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;