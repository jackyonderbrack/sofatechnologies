import { Link } from "react-router-dom";
import Logo from "../../assets/sofatechnologies-f5b642-transparent.png";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <>
      <div id="Navigation">
        <div id="NavigationHeader">
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
        </div>
        <div id="NavigationHeaderBottom">
          <Link to="/">Strona główna</Link>
          <Link to="/rozwiazania">Rozwiązania</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
