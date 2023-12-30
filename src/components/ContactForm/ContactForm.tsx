import React, { useState } from "react";
import "./ContactForm.css";

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
      const response = await fetch(`${window.location.origin}/api/contact-form/send-email`, {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="contactFormClientName"
        onChange={handleChange}
        value={formData.contactFormClientName}
        placeholder="Jak się nazywasz?"
      />

      <input
        type="email"
        name="contactFormClientEmail"
        onChange={handleChange}
        value={formData.contactFormClientEmail}
        placeholder="Twój e-mail"
      />

      <textarea
        name="contactFormMessage"
        onChange={handleChange}
        value={formData.contactFormMessage}
        placeholder="O co chcesz zapytać?"
      />

      <div className="submitArea">
        <button
          type="submit"
          className="btn-secondary">
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
