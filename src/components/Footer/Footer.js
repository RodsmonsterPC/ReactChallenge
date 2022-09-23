import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.featuresFooter}>
      <div className="container d-flex flex-column align-items-center">
        <div>
          <p>
            <a href="https://dev.to/">DEV Community</a> - A constructive and
            inclusive social network for software developers. With you every
            step of your journey.
          </p>
        </div>
        <div>
          <p>
            Built on
            <a href="https://www.forem.com/">Forem</a> - the{" "}
            <a href="https://dev.to/t/opensource">open source</a> software that
            powers <a href="https://dev.to/">DEV</a> and other inclusive
            communities.
          </p>
        </div>
        <div>
          <p>
            Made with love and{" "}
            <a href="https://dev.to/t/rails">Ruby on Rails</a>. DEV Community{" "}
            <span>©</span>
            2016 - 2022.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
