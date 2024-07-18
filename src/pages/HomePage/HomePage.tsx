// Styles
import "./HomePage.css";
// Icons
import IconDedidcatedSolutions from "../../assets/icon-dedicated-sofatechnologies.png";
import IconMobileApps from "../../assets/icon-mobileapps-sofatechnologies.png";
import IconSpectialistTeam from "../../assets/icon-webspecialists-sofatechnologies.png";
import IconPartnership from "../../assets/icon-partnership-sofatechnologies.png";
// Banners
import EarthImg from "../../assets/background-earth-01-sofatechnologies.webp";

// Clients
import Partner1 from "../../assets/partners/partner-artmageddon-sofatechnologies.png";
import Partner2 from "../../assets/partners/partner-gentlemanshop-sofatechnologies.png";
import Partner3 from "../../assets/partners/partner-holisticspa-sofatechnologies.png";
import Partner4 from "../../assets/partners/partner-lesnaperla-sofatechnologies.png";
import Partner5 from "../../assets/partners/partner-mensworldbarbershop-sofatechnologies.png";
import Partner6 from "../../assets/partners/partner-metkom-sofatechnologies.png";
import Partner7 from "../../assets/partners/partner-natarasie-sofatechnologies.png";
import Partner8 from "../../assets/partners/partner-vending4all-sofatechnologies.png";

// Components
import ImageBox from "../../components/ImageBox/ImageBox";
import Title from "../../components/Title/Title";
import ImagesRow from "../../components/ImageRow/ImageRow";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

// Images
import PortfolioSkinsnImg from "../../assets/portfolio/porfolio-skinsn-sofatechnologies.jpg";
import PortfolioRestauracjaLesnaPerlaImg from "../../assets/portfolio/porfolio-lesnaperla-main-sofatechnologies.png";
import PorftolioNatarasieImg from "../../assets/portfolio/porfolio-natarasie-sofatechnologies.png";
import PortfolioVending4AllImg from "../../assets/portfolio/porfolio-vending4all-sofatechnologies.png";
import PortfolioMensworldImg from "../../assets/portfolio/porfolio-mensworldbarbershop-sofatechnologies.png";
import PortfolioMetkomImg from "../../assets/portfolio/porfolio-metkom-main-sofatechnologies.png";
import PortfolioArtmageddonImg from "../../assets/portfolio/porfolio-artmageddon-sofatechnologies.png";
import PortfolioHolisticSpaImg from "../../assets/portfolio/porfolio-spaslask-main-sofatechnologies.png";

const HomePage = () => {
  const _homeContents_ImageBox = [
    {
      imgsrc: IconDedidcatedSolutions,
      heading: "Dedykowane rozwiązania",
      content:
        "Mamy doświadczenie w tworzeniu systemów zarządzania produkcją, zasobami, ale również interaktywnych gier, programów i sieci. Nasze rozwiązania są dostosowane do specyficznych potrzeb klienta, zapewniając elastyczność, skalowalność i integrację z istniejącymi systemami.",
    },
    {
      imgsrc: IconMobileApps,
      heading: "Aplikacje mobilne",
      content:
        "Projektujemy zaawansowane aplikacje mobilne dla systemów iOS i Android. Zapewniamy intuicyjny interfejs użytkownika, niezawodny i bezpieczny kod, a także stabilną działalność. Nasze aplikacje są zoptymalizowane pod kątem wydajności i bezpieczeństwa, co gwarantuje doskonałe wrażenia użytkownika.",
    },
    {
      imgsrc: IconPartnership,
      heading: "Partnerstwo technologiczne",
      content:
        "Dostarczamy wszechstronne konsultacje w dziedzinie technologii IT. Naszym celem jest osiągnięcie wyznaczonych rezultatów w ścisłej współpracy z naszymi klientami. Oferujemy wsparcie na każdym etapie projektu, od planowania, przez wdrożenie, aż po utrzymanie i rozwój.",
    },
    {
      imgsrc: IconSpectialistTeam,
      heading: "Kadra specjalistyczna",
      content:
        "Nasza kadra to zespół wysoko wykwalifikowanych specjalistów, którzy projektują zaawansowane rozwiązania dla systemów iOS i Android. Zapewniamy intuicyjny interfejs użytkownika, niezawodny i bezpieczny kod oraz stabilną działalność aplikacji. Dzięki naszym ekspertom, możemy sprostać najbardziej wymagającym projektom.",
    },
  ];

  return (
    <>
      <Header
        content={
          <div>
            <h1>
              Zbudujemy Twoją <br />
              <span className="text-gradient">Stronę internetową</span>
              <br />
              od podstaw
            </h1>
          </div>
        }
        imgUrl={EarthImg}
      />
      <section
        id="CategoryBoxes"
        className="grid grid-cols-4 gap-1">
        {_homeContents_ImageBox.map((item, index) => (
          <ImageBox
            key={index}
            heading={item.heading}
            imgsrc={item.imgsrc}
            content={item.content}
          />
        ))}
      </section>
      <section className="background-top my-1 py-4">
        <div className="flex flex-col justify-content-center align-items-center">
          <h2>
            Sprawdź niektóre nasze <span className="text-gradient">realizacje</span>
          </h2>
          <p className="text-align-center container">
            Wszystkie nasze realizacje są <strong>realnymi</strong> projektami, którymi klienci się cieszą, zarządzają i
            wykorzystują w swoim biznesie, chwaląc sie zaś swoim potencjalnym klientom. Mimo tego, że każdy projekt
            zakładał inny scenariusz, wszystkie są
            <strong> responsywne i dostosowane</strong> do warunków dzisiejszego Web-view.
          </p>
          <h4>Wybierz i zobacz nasze projekty na żywo</h4>
        </div>
        <div className="p-4 flex flex-1 flex-wrap justify-center gap-4">
          <Card
            title="SKIN Simply Nutrition"
            description="SKLEP I KOSMETOLOGIA"
            imageUrl={PortfolioSkinsnImg}
            buttonLink="https://skinsn.eu"
          />
          <Card
            title="Leśna Perła"
            description="DOM PRZYJĘĆ"
            imageUrl={PortfolioRestauracjaLesnaPerlaImg}
            buttonLink="https://lesna-perla.pl"
          />
          <Card
            title="Na Tarasie"
            description="BRANŻA OGRODNICZA"
            imageUrl={PorftolioNatarasieImg}
            buttonLink="https://natarasie.eu"
          />
          <Card
            title="Vending 4 All"
            description="WIZYTÓWKA PRODUCENTA"
            imageUrl={PortfolioVending4AllImg}
            buttonLink="https://vending4all.eu"
          />
          <Card
            title="Men’s World"
            description="WITRYNA I SKLEP"
            imageUrl={PortfolioMensworldImg}
            buttonLink="http://mensworldbarbershop.pl"
          />
          <Card
            title="Metkom"
            description="STRONA, BLOG, KATALOG"
            imageUrl={PortfolioMetkomImg}
            buttonLink="https://metkom.com.pl"
          />
          <Card
            title="Artmageddon"
            description="WIZYTÓWKA STUDIA TATUAŻU"
            imageUrl={PortfolioArtmageddonImg}
            buttonLink="https://artmageddon.pl"
          />
          <Card
            title="Holistic Spa"
            description="GABINET SPECJALISTYCZNY"
            imageUrl={PortfolioHolisticSpaImg}
            buttonLink="https://spaslask.pl"
          />
        </div>
      </section>

      <section className="background-top pt-2 pb-6">
        <div className="flex flex-col align-items-center pb-6">
          <Title
            gradientHeader="Nasi klienci"
            leadHeader={null}
            leadParagraph={
              <div>
                <h2>Dołącz i ciesz się rozwijającym się biznesem</h2>
                <p>Zaufali nam m.in:</p>
              </div>
            }
          />
          <ImagesRow imageUrls={[Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7, Partner8]} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
