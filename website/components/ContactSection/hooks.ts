import { useState, useCallback } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { AlertColor } from "@mui/material";
import { useCreateQuoteMutation } from "apollo/generated";

interface MessageState {
  text?: string;
  severity?: AlertColor;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  firstName: yup.string().required("Name is required"),
  lastName: yup.string(),
  age: yup.number().integer().min(12).max(120),
  phone: yup.string().required("Phone number is required"),
  aditionalInfo: yup.string(),
});

let timeout: NodeJS.Timeout | null = null;

export const useContactForm = () => {
  const [createQuote] = useCreateQuoteMutation();
  const [reCAPTCHA, setReCAPTCHA] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<MessageState>({});

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
      aditionalInfo: "",
    },
    validationSchema: validationSchema,
    onSubmit: (variables) => {
      setIsSubmitting(true);
      if (!reCAPTCHA) {
        createAlert({
          text: "ReCAPTCHA is a required field",
          severity: "error",
        });
        setIsSubmitting(false);
        return;
      }
      createQuote({ variables }).then((a) => {
        if (a.errors) {
          console.log("errors => ", a.errors);
        }
        createAlert({
          text: "Quote request has been set!",
          severity: "success",
        });
        form.resetForm();
        setIsSubmitting(false);
      });
    },
  });

  return { form, setReCAPTCHA, message, isSubmitting };
};
