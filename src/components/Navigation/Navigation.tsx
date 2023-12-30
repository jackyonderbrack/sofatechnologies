import { Link } from "react-router-dom";
import Logo from "../../assets/sofatechnologies-f5b642-transparent.png";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <>
      <div id="Navigation">
        <section id="NavigationHeader">
          <Link
            to="/#"
            className="mainLogoContainer">
            <img
              src={Logo}
              alt="SofaTechnologies"
              className="mainLogoImg"
            />
            <div className="mainLogoContent">
              <span>SOFA</span>
              <span>TECHNOLOGIES</span>
            </div>
          </Link>
        </section>
        <section id="NavigationHeaderBottom">
          <Link to="/">Strona główna</Link>
          <Link to="/rozwiazania">Rozwiązania</Link>
          <Link to="/kontakt">Kontakt</Link>
        </section>
      </div>
    </>
  );
};

export default Navigation;
