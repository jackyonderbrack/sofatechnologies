// Styles
import "./HomePage.css";
// Icons
import IconDedidcatedSolutions from "../../assets/icon-dedicated-sofatechnologies.png";
import IconMobileApps from "../../assets/icon-mobileapps-sofatechnologies.png";
import IconSpectialistTeam from "../../assets/icon-webspecialists-sofatechnologies.png";
import IconPartnership from "../../assets/icon-partnership-sofatechnologies.png";
// Banners
import EarthImg from "../../assets/background-earth-01-sofatechnologies.png";
import BackgroundBannerImg from "../../assets/background-banner-transparent-backround.png";
import HappyCustomerImg from "../../assets/pexels-alphatradezone-5833244.jpg";
import HappyCustomer2Img from "../../assets/pexels-karolina-grabowska-5717839.jpg";
// Clients
import Partner1 from "../../assets/partners/partner-artmageddon-sofatechnologies.png";
import Partner2 from "../../assets/partners/partner-gentlemanshop-sofatechnologies.png";
import Partner3 from "../../assets/partners/partner-holisticspa-sofatechnologies.png";
import Partner4 from "../../assets/partners/partner-lesnaperla-sofatechnologies.png";
import Partner5 from "../../assets/partners/partner-mensworldbarbershop-sofatechnologies.png";
import Partner6 from "../../assets/partners/partner-metkom-sofatechnologies.png";
import Partner7 from "../../assets/partners/partner-natarasie-sofatechnologies.png";
import Partner8 from "../../assets/partners/partner-vending4all-sofatechnologies.png";
// Projects
// Components
import ImageBox from "../../components/ImageBox/ImageBox";
import Title from "../../components/Title/Title";
import ImagesRow from "../../components/ImageRow/ImageRow";
import ResponsiveParallaxBanner from "../../components/ResponsiveParallaxBanner/ResponsiveParallaxBanner";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import PortfolioGentlemanShopImg from "../../assets/portfolio/porfolio-gentlemanshop-sofatechnologies.png";
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
        "Mamy doświadczenie w tworzeniu systemów zarządzania produkcją,    zasobami, ale również interaktywnych gier, programów i sieci.",
    },
    {
      imgsrc: IconMobileApps,
      heading: "Aplikacje mobilne",
      content:
        "Projektujemy zaawansowane aplikacje mobilne dla systemów iOS i Android. Zapewniamy intuicyjny interfejs użytkownika, niezawodny i bezpieczny kod, a także stabilną działalność.",
    },
    {
      imgsrc: IconPartnership,
      heading: "Partnerstwo technologiczne",
      content:
        "Dostarczamy wszechstronne konsultacje w dziedzinie technologii IT. Naszym celem jest osiągnięcie wyznaczonych rezultatów w ścisłej współpracy z naszymi klientami.",
    },
    {
      imgsrc: IconSpectialistTeam,
      heading: "Kadra specjalistyczna",
      content:
        "Projektujemy zaawansowane aplikacje mobilne dla systemów iOS i Android. Zapewniamy intuicyjny interfejs użytkownika, niezawodny i bezpieczny kod, a także stabilną działalność.",
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
            <div className="my-3">
              {/* <Button
                  linkTo="/solutions"
                  buttonText="Rozwiązania"
                  theme="btn-primary"
                /> */}
            </div>
          </div>
        }
        imgUrl={EarthImg}
      />
      <section
        id="CategoryBoxes"
        className="w-full gap-2 grid grid-cols-4 justify-content-between">
        {_homeContents_ImageBox.map((item, index) => (
          <ImageBox
            key={index}
            heading={item.heading}
            imgsrc={item.imgsrc}
            content={item.content}
          />
        ))}
      </section>
      <section className="background-top my-4 py-4">
        <div className="flex flex-col justify-content-center align-items-center">
          <h2>
            Sprawdź niektóre nasze <span className="text-gradient">realizacje</span>
          </h2>
          <p className="text-align-center container">
            Wszystkie nasze realizacje są <strong>realnymi</strong> projektami, którymi klienci się cieszą, zarządzają i wykorzystują w
            swoim biznesie, chwaląc sie zaś swoim potencjalnym klientom. Mimo tego, że każdy projekt zakładał inny scenariusz, wszystkie są
            <strong>responsywne i dostosowane</strong> do warunków dzisiejszego Web-view.
          </p>
          <h4>Wybierz i zobacz nasze projekty na żywo</h4>
        </div>
        <div className="flex flex-wrap justify-content-center gap-2 my-4">
          <Card
            title="Gentleman Shop"
            description="SKLEP I BLOG"
            imageUrl={PortfolioGentlemanShopImg}
            buttonLink="http://gentlemanshop.pl"
          />
          <Card
            title="Leśna Perła"
            description="WITRYNA RESTARUACJI"
            imageUrl={PortfolioRestauracjaLesnaPerlaImg}
            buttonLink="http://restauracjalesnaperla.pl"
          />
          <Card
            title="Na Tarasie"
            description="WITRYNA INTERNETOWA"
            imageUrl={PorftolioNatarasieImg}
            buttonLink="http://natarasie.eu"
          />
          <Card
            title="Vending 4 All"
            description="WIZYTÓWKA PRODUCENTA"
            imageUrl={PortfolioVending4AllImg}
            buttonLink="http://vending4all.eu"
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
            buttonLink="http://metkom.com.pl"
          />
          <Card
            title="Artmageddon"
            description="WIZYTÓWKA STUDIA TATUAŻU"
            imageUrl={PortfolioArtmageddonImg}
            buttonLink="http://artmageddon.pl"
          />
          <Card
            title="Holistic Spa"
            description="GABINET SPECJALISTYCZNY"
            imageUrl={PortfolioHolisticSpaImg}
            buttonLink="http://spaslask.pl"
          />
        </div>
      </section>

      <section className="w-full background-top my-4 py-4">
        <div className="flex flex-col align-items-center">
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
      <section id="ParallaxBanner">
        <ResponsiveParallaxBanner
          imgPosition="right"
          text={
            <div className="content">
              <h1 className="main_header">Dołącz do grona zadowolnych klientów</h1>

              <p>
                <span>
                  Wszystkie nasze realizacje są realnymi projektami, którymi klienci się cieszą, zarządzają i wykorzystują w swoim biznesie,
                  chwaląc sie zaś swoim potencjalnym klientom. Mimo tego, że każdy projekt zakładał inny scenariusz, wszystkie są
                  responsywne i dostosowane do warunków dzisiejszego webView.
                </span>
              </p>
            </div>
          }
          imageUrl={HappyCustomerImg}
          image2Url={HappyCustomer2Img}
          backgroundUrl={BackgroundBannerImg}
        />
      </section>
    </>
  );
};

export default HomePage;
