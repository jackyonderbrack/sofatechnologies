import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <p id="copyright">
          ©2024 SofaTechnologies <br /> Wszelkie prawa zastrzeżone.
        </p>
        <p className="contactInfo">
          <Link to="/polityka-prywatności">* Polityka prywatności</Link>
        </p>
      </div>

      <p className="contactInfo">
        Szanujemy Twoją prywatność. Wszelkie dane osobowe zbierane na tej stronie będą wykorzystywane wyłącznie do celów, które zostały
        jasno określone przy ich zbieraniu, takich jak odpowiedzi na zapytania czy realizacja usług. Nie udostępniamy danych osobowych
        stronom trzecim bez wyraźnej zgody, chyba że jest to wymagane przez prawo. Więcej informacji na temat sposobu gromadzenia,
        wykorzystywania i ochrony danych osobowych można znaleźć w naszej pełnej Polityce Prywatności dostępnej na stronie.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
