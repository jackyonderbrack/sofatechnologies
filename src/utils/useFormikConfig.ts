import { useFormik } from "formik";
import * as Yup from "yup";

// Schemat walidacji dla formularza kontaktowego
const contactFormValidationSchema = Yup.object({
  contactFormUser: Yup.string().required("Proszę podać swoje imię"),
  contactFormEmail: Yup.string().email("Niepoprawny adres email").required("Email jest wymagany"),
  contactFormMessage: Yup.string().required("Proszę wpisać wiadomość"),
});

export const useContactFormik = (
  onSubmit: (emailValues: { contactFormUser: string; contactFormEmail: string; contactFormMessage: string }) => void
) => {
  return useFormik({
    initialValues: {
      contactFormUser: "",
      contactFormEmail: "",
      contactFormMessage: "",
    },
    validationSchema: contactFormValidationSchema,
    onSubmit,
  });
};
