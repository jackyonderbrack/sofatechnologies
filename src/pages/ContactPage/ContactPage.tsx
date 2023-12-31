import ContactForm from "../../components/ContactForm/ContactForm";
import Header from "../../components/Header/Header";
import "./ContactPage.css";
import ContactImg from "../../assets/background-letters-01-sofatechnologies.png";

const ContactPage = () => {
  return (
    <>
      <Header
        content={
          <div>
            <h1>
              Masz jakiekolwiek <br />
              <span className="text-gradient">Pytania?</span>
            </h1>
          </div>
        }
        imgUrl={ContactImg}
      />
      <div className="contactPageLayout grid grid-cols-2 gap-4">
        <div>
          <ContactForm />
        </div>
        <div className="flex flex-col">
          <h3>INFORMACJE DODATKOWE</h3>
          <p>Jeśli masz jakiekolwiek pytania zawsze możesz napisać do nas zwykły prosty e-mail</p>
          <h4>sofatechnologies@gmail.com</h4>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
