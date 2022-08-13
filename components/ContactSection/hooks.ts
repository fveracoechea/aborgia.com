import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { AlertColor } from "@mui/material";
import { useTranslation } from "next-export-i18n";

interface MessageState {
  text?: string;
  severity?: AlertColor;
}

let timeout: NodeJS.Timeout | null = null;

export const useContactForm = () => {
  const { t } = useTranslation();
  const [reCAPTCHA, setReCAPTCHA] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<MessageState>({});

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(t("form.messages.email.invalid"))
      .required(t("form.messages.email.required")),
    firstName: yup.string().required(t("form.messages.firstName.required")),
    lastName: yup.string(),
    age: yup
      .number()
      .integer()
      .min(12, t("form.messages.age.invalid"))
      .max(120, t("form.messages.age.invalid")),
    phone: yup
      .string()
      .min(9, t("form.messages.phone.invalid"))
      .required(t("form.messages.phone.required")),
    additionalInformation: yup.string(),
  });

  const createAlert = (data: MessageState) => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    setMessage(data);
    timeout = setTimeout(() => {
      setMessage({});
    }, 4500);
  };

  const form = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      age: "",
      phone: "",
      insurance: "",
      additionalInformation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);

      if (!reCAPTCHA) {
        createAlert({
          text: t("form.messages.reCAPTCHA.required"),
          severity: "error",
        });
        setIsSubmitting(false);
        return;
      }
      // TODO: send to sendgrid

      fetch("/api/sendQuote", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then(({ error }) => {
          if (error) {
            createAlert({
              text: t("form.messages.error"),
              severity: "error",
            });
            setIsSubmitting(false);
            return;
          }
          createAlert({
            text: t("form.messages.success"),
            severity: "success",
          });
          setIsSubmitting(false);
          form.resetForm();
        })
        .catch((err) => {
          console.log(err);
          createAlert({
            text: t("form.messages.error"),
            severity: "error",
          });
          setIsSubmitting(false);
        });
    },
  });

  return { form, setReCAPTCHA, message, isSubmitting };
};
