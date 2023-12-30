import "./footer.css";
import Logo from "../../assets/sofatechnologies-f5b642-transparent.png";
import FacebookSocial from "../../assets/socials/facebook_icon_dark.png";
import FacebookSocialHover from "../../assets/socials/facebook_icon_dark_hover.png";
import InstagramSocial from "../../assets/socials/instagram_icon_dark.png";
import InstagramSocialHover from "../../assets/socials/instagram_icon_dark_hover.png";
import GithubSocial from "../../assets/socials/github_icon_dark.png";
import GithubSocialHover from "../../assets/socials/github_icon_dark_hover.png";

import { Link, NavLink } from "react-router-dom";
import ContactPage from "../../pages/ContactPage/ContactPage";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="background-top">
      <section className="footerHeader">
        <div className="footerHeaderCol">
          <Link
            to="/#"
            className="footerLogoContainer">
            <img
              src={Logo}
              alt="SofaTechnologies"
              className="footerLogoImg"
            />
            <div className="mainLogoContent">
              <span>SOFA</span>
              <span>TECHNOLOGIES</span>
            </div>
          </Link>
        </div>
        <div className="footerHeaderCol">
          <h3>Nawigacja</h3>
          <nav className="flex flex-col">
            <Link to="/">Strona główna</Link>
            <Link to="/rozwiazania">Rozwiązania</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>
        </div>
        <div className="footerHeaderCol">
          <h3>Socials </h3>
          <div className="social_icons">
            <div className="socialIconContainer">
              <img
                className="facebookSocialIcon"
                src={FacebookSocial}
                alt="Facebook social icon"
              />
              <img
                className="facebookSocialIconHover"
                src={FacebookSocialHover}
                alt="Facebook social icon"
              />
            </div>

            <div className="socialIconContainer">
              <img
                className="instagramSocialIcon"
                src={InstagramSocial}
                alt="Instagram social icon"
              />
              <img
                className="instagramSocialIconHover"
                src={InstagramSocialHover}
                alt="Instagram social icon"
              />
            </div>

            <div className="socialIconContainer">
              <a
                href="https://github.com/jackyonderbrack"
                target="_blank">
                <img
                  className="githubSocialIcon"
                  src={GithubSocial}
                  alt="Github social icon"
                />
                <img
                  className="githubSocialIconHover"
                  src={GithubSocialHover}
                  alt="Github social icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footerHeaderCol">
          <Button
            linkTo="/kontakt"
            buttonText="Skontaktuj się z nami"
            theme="btn-secondary"
          />
        </div>
      </section>
      <section className="footerBottom"></section>
    </footer>
  );
};

export default Footer;
