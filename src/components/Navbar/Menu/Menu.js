import About from "./MenuSections/About";
import CodeOfConduct from "./MenuSections/CodeOfConduct";
import Contact from "./MenuSections/Contact";
import Faq from "./MenuSections/Faq";
import ForemShop from "./MenuSections/ForemShop";
import Guides from "./MenuSections/Guides";
import Home from "./MenuSections/Home";
import Listings from "./MenuSections/Listings";
import Podcast from "./MenuSections/Podcast";
import PrivacyPolicy from "./MenuSections/PrivacyPolicy";
import ReadingList from "./MenuSections/ReadingList";
import Sponsors from "./MenuSections/Sponsors";
import Tags from "./MenuSections/Tags";
import TermsOfUse from "./MenuSections/TermsOfUse";
import Video from "./MenuSections/Video";
import FaceBook from "./MenuSections/Pages/FaceBook"
import Github from "./MenuSections/Pages/Github"
import Instagram from "./MenuSections/Pages/Instagram"
import Twitch from "./MenuSections/Pages/Twitch"
import Twitter from "./MenuSections/Pages/Twitter"



const Menu = () => {
  return (
    <div className="offcanvas-body">
      <button
        className="navbar-toggler d-md-none border border-light"
        type=" button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="navbar-toggler-icon d-flex align-items-center"></span>
      </button>
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <Home />
        <ReadingList />
        <Listings />
        <Podcast />
        <Video />
        <Tags />
        <Faq />
        <ForemShop />
        <Sponsors />
        <About />
        <Contact />
        <Guides />
        <br />
        <h5>Others</h5>
        <CodeOfConduct />
        <PrivacyPolicy />
        <TermsOfUse />
      </ul>
      <div className="d-flex justify-content-between mt-3 ">
        <FaceBook/>
        <Github/>
        <Instagram/>
        <Twitch/>
        <Twitter/>
      </div>
    </div>
  );
};
export default Menu;
