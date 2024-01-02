import Header from "../../components/Header/Header";
import PuzzlesImg from "../../assets/background-puzzles-01-sofatechnologies.webp";
import ImageBox from "../../components/ImageBox/ImageBox";
import ImagesRow from "../../components/ImageRow/ImageRow";

// Icons imports
import IconCustomWebSites from "../../assets/icon-webadjustment-sofatechnologies.webp";
import IconCustomWebShops from "../../assets/icon-webshop-sofatechnologies.png";
import IconDedicatedSolutions from "../../assets/icon-dedicated-sofatechnologies.webp";

// Clients
import IntegrationAllegro from "../../assets/integrations/integrations-allegro-sofatechnologies.webp";
import IntegrationBaseLinker from "../../assets/integrations/integrations-baselinker-light-sofatechnologies.webp";
import IntegrationPresta from "../../assets/integrations/integrations-prestashop-light-sofatechnologies.webp";
import IntegrationWordpress from "../../assets/integrations/integrations-wordpress-light-sofatechnologies.webp";
import IntegrationWooCommerce from "../../assets/integrations/integrations-woocommerce-light-sofatechnologies.webp";
import IntegrationShopGold from "../../assets/integrations/integrations-shopgold-light-sofatechnologies.webp";
import IntegrationInPost from "../../assets/integrations/integrations-inpost-light-sofatechnologies.webp";
import IntegrationCyberFolks from "../../assets/integrations/integrations-cyberfolks-light-sofatechnologies.webp";

const SolutionsPage = () => {
  const _solutionsContents_ImageBox = [
    {
      imgsrc: IconCustomWebSites,
      heading: "Witryny internetowe",
      content: (
        <div className="category-boxes_webpages">
          <p>Od najprostszych wizytówek, po wytworne i skuteczne elementy opisowe dla firm, produktów, miejsc, blogów itp.</p>
        </div>
      ),
    },
    {
      imgsrc: IconCustomWebShops,
      heading: "Sklepy / systemy zarządzania",
      content: (
        <div className="category-boxes_webpages">
          <p>Sprzedajesz książkę? Czy może prowadzisz ogromny magazyn? Wszystko da się zrobić!</p>
        </div>
      ),
    },
    {
      imgsrc: IconDedicatedSolutions,
      heading: "Dedykowane rozwiązania",
      content: (
        <div className="category-boxes_webpages">
          <p>
            Mamy doświadczenie w tworzeniu systemów zarządzania produkcją, zasobami, ale również interaktywnych gier, programów i sieci.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header
        content={
          <div>
            <h1>
              Poznaj nasze <br />
              <span className="text-gradient">Rozwiązania</span>
              <br />w biznesie
            </h1>
          </div>
        }
        imgUrl={PuzzlesImg}
      />
      <section className="content background-top">
        <div className="content">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2>CZYM SIE ZAJMUJEMY?</h2>
              <p>
                Jesteśmy w czołówce firm programistycznych w Polsce, specjalizujących się w tworzeniu stron i sklepów internetowych, które
                są nie tylko estetyczne, ale również niezwykle przyjazne dla użytkowników. Nasze projekty są zaprojektowane w taki sposób,
                aby zapewnić łatwą nawigację, intuicyjne interakcje i doskonałe wrażenia użytkownika.
              </p>
              <div className="my-4">
                <h3>Czym są dedykowane rozwiązania?</h3>
                <p>
                  <strong>Indywidualne dopasowanie do potrzeb</strong>: <br />
                  Dedykowane rozwiązania to oprogramowanie stworzone specjalnie pod kątem konkretnych wymagań i potrzeb klienta. W
                  przeciwieństwie do gotowych produktów, są one projektowane tak, aby idealnie pasowały do specyfiki działalności klienta.
                </p>
                <p>
                  <strong>Elastyczność i skalowalność</strong>: <br />
                  Oprogramowanie może być rozwijane i dostosowywane w miarę zmian w biznesie klienta. Oznacza to, że system będzie rósł wraz
                  z firmą, co jest dużym atutem.
                </p>
                <p>
                  <strong>Integracja z istniejącymi systemami</strong>: <br />
                  Mogą być łatwo zintegrowane z już używanymi przez klienta narzędziami i systemami, co zapewnia płynność pracy i
                  optymalizację procesów.
                </p>
                <p>
                  <strong>Bezpieczeństwo i niezawodność</strong>:<br />
                  Zwróćmy uwagę na aspekty bezpieczeństwa, podkreślając, że dedykowane oprogramowanie może być dostosowane do specyficznych
                  wymagań bezpieczeństwa i prywatności klienta.
                </p>
                <p>
                  <strong>Wsparcie i rozwój</strong>: <br />
                  Wraz z dedykowanym rozwiązaniem klient otrzymuje również dostosowane wsparcie techniczne oraz możliwość ciągłego
                  rozwijania oprogramowania zgodnie z ewoluującymi potrzebami.
                </p>
                <p>
                  <strong>Koszty i inwestycja długoterminowa</strong>:<br />
                  Choć początkowy koszt może być wyższy niż w przypadku gotowych rozwiązań, w dłuższej perspektywie dedykowane
                  oprogramowanie często okazuje się bardziej opłacalne, ponieważ dokładnie odpowiada potrzebom firmy i może być efektywniej
                  wykorzystane.
                </p>
              </div>
            </div>
            <div>
              <div
                id="CategoryBoxes"
                className="grid grid-cols-1 gap-1">
                {_solutionsContents_ImageBox.map((item, index) => (
                  <ImageBox
                    key={index}
                    heading={item.heading}
                    imgsrc={item.imgsrc}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="background-top content py-4 flex  flex-col align-items-center">
        <h3>Tworzymy integracje do:</h3>
        <div className="grid grid-rows-2">
          <ImagesRow imageUrls={[IntegrationAllegro, IntegrationBaseLinker, IntegrationPresta, IntegrationWordpress]} />
          <ImagesRow imageUrls={[IntegrationWooCommerce, IntegrationShopGold, IntegrationInPost, IntegrationCyberFolks]} />
        </div>
      </section>
    </>
  );
};

export default SolutionsPage;
