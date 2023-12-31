import React from "react";
import "./ContactForm.css";
import { useContactFormik } from "../../utils/useFormikConfig";

const ContactForm: React.FC = () => {
  const formik = useContactFormik(async (formData) => {
    try {
      const response = await fetch(`https://sofatechnologies.com/api/contact-form/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Użyj formData zamiast values
      });

      if (response.ok) {
        const responseData = await response.text();
        console.log(responseData);
      } else {
        console.error("Błąd serwera:", response.status);
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error);
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            name="contactFormUser"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactFormUser}
            placeholder="Jak się nazywasz?"
          />
          {formik.touched.contactFormUser && formik.errors.contactFormUser ? (
            <p className="error-message">{formik.errors.contactFormUser}</p>
          ) : null}
        </div>
        <div className="input-field">
          <input
            type="email"
            name="contactFormEmail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactFormEmail}
            placeholder="Twój e-mail"
          />
          {formik.touched.contactFormEmail && formik.errors.contactFormEmail ? (
            <p className="error-message">{formik.errors.contactFormEmail}</p>
          ) : null}
        </div>
        <div className="input-field">
          <textarea
            name="contactFormMessage"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactFormMessage}
            placeholder="O co chcesz zapytać?"
          />
          {formik.touched.contactFormMessage && formik.errors.contactFormMessage ? (
            <p className="error-message">{formik.errors.contactFormMessage}</p>
          ) : null}
        </div>

        <div className="submitArea">
          <button
            type="submit"
            className="btn-secondary">
            Wyślij
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
