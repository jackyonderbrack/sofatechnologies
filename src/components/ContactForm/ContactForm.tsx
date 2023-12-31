import React, { useState } from "react";
import "./ContactForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    contactFormClientName: "",
    contactFormClientEmail: "",
    contactFormMessage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  };

  return (
    <>
      <Formik
        initialValues={{
          contactFormClientName: "",
          contactFormClientEmail: "",
          contactFormMessage: "",
        }}
        // Możesz dodać walidację tutaj, jeśli jest potrzebna
        onSubmit={async (values, { setSubmitting }) => {
          // Logika wysyłania formularza
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="contactFormClientName"
              placeholder="Jak się nazywasz?"
            />
            {/* Tutaj możesz dodać ErrorMessage dla każdego pola, jeśli jest potrzebna walidacja */}
            <Field
              type="email"
              name="contactFormClientEmail"
              placeholder="Twój e-mail"
            />
            <Field
              as="textarea"
              name="contactFormMessage"
              placeholder="O co chcesz zapytać?"
            />
            <button
              type="submit"
              disabled={isSubmitting}>
              Wyślij
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
