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
    phone: yup.string().required(t("form.messages.phone.required")),
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
      age: 0,
      phone: "",
      insurance: "",
      additionalInformation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (variables) => {
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

      // createQuote({ variables }).then((a) => {
      //   if (a.errors) {
      //     console.log("errors => ", a.errors);
      //   }
      //   createAlert({
      //     text: t("form.messages.success"),
      //     severity: "success",
      //   });
      //   form.resetForm();
      //   setIsSubmitting(false);
      // });
    },
  });

  return { form, setReCAPTCHA, message, isSubmitting };
};
