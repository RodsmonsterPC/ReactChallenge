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
import FaceBook from "./MenuSections/FaceBook"
import Github from "./MenuSections/Github"
import Instagram from "./MenuSections/Instagram"
import Twitch from "./MenuSections/Twitch"
import Twitter from "./MenuSections/Twitter"


 
const Menu = () => {
  return (
    <div>
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
        {/* <Twitch/> */}
        <Twitter/>
      </div>
    </div>
  );
};
export default Menu;
