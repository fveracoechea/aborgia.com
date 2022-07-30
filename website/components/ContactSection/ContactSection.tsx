import React, { FC } from "react";
import {
  Grid,
  Container,
  TextField,
  Button,
  Box,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import ReCAPTCHA from "react-google-recaptcha";
import { useHomepageQuery } from "apollo/generated";

import { SectionTitle } from "components/Styled";
import { useContactForm } from "./hooks";

const ReCAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

export const ContactSection: FC = () => {
  const { form, setReCAPTCHA, message, isSubmitting } = useContactForm();
  const { data } = useHomepageQuery();
  const insurance = data?.homepage?.data?.attributes?.Insurance;

  const onChange = (token: string | null) => {
    if (token) {
      setReCAPTCHA(true);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ pt: 6, scrollMarginTop: (t) => t.spacing(6) }}
      id="contact"
    >
      <Grid container spacing={4} sx={{}}>
        <Grid item sm={12} xs={12}>
          <SectionTitle>Get a Quote</SectionTitle>
        </Grid>
      </Grid>

      {message?.severity && (
        <Box
          sx={{
            position: "fixed",
            zIndex: 10,
            right: "2rem",
            top: "6rem",
          }}
        >
          <Alert
            sx={{ boxShadow: (t) => t.shadows[4] }}
            severity={message.severity}
          >
            {message.text}
          </Alert>
        </Box>
      )}

      <Grid
        component="form"
        spacing={4}
        container
        item
        sm={12}
        xs={12}
        onSubmit={form.handleSubmit}
      >
        <Grid item md={4} sm={12} xs={12}>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            required
            value={form.values.firstName}
            onChange={form.handleChange}
            error={form.touched.firstName && Boolean(form.errors.firstName)}
            helperText={form.touched.firstName && form.errors.firstName}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={form.values.lastName}
            onChange={form.handleChange}
            error={form.touched.lastName && Boolean(form.errors.lastName)}
            helperText={form.touched.lastName && form.errors.lastName}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <TextField
            fullWidth
            id="age"
            name="age"
            type="number"
            label="Age"
            value={form.values.age}
            onChange={form.handleChange}
            error={form.touched.age && Boolean(form.errors.age)}
            helperText={form.touched.age && form.errors.age}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            required
            value={form.values.email}
            onChange={form.handleChange}
            error={form.touched.email && Boolean(form.errors.email)}
            helperText={form.touched.email && form.errors.email}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone Number"
            required
            value={form.values.phone}
            onChange={form.handleChange}
            error={form.touched.phone && Boolean(form.errors.phone)}
            helperText={form.touched.phone && form.errors.phone}
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <TextField
            fullWidth
            id="insurance"
            name="insurance"
            required
            label="Insurance coverage"
            value={form.values.insurance}
            onChange={form.handleChange}
            error={form.touched.insurance && Boolean(form.errors.insurance)}
            helperText={form.touched.insurance && form.errors.insurance}
            select
          >
            {insurance?.coverages?.map((item) => (
              <MenuItem key={item?.id} value={item?.name}>
                {item?.name}
              </MenuItem>
            ))}
            <MenuItem key="other-key" value="Other">
              Other
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <TextField
            fullWidth
            id="additionalInformation"
            name="additionalInformation"
            label="Aditional Information"
            multiline
            maxRows={4}
            minRows={4}
            value={form.values.additionalInformation}
            onChange={form.handleChange}
            error={
              form.touched.additionalInformation &&
              Boolean(form.errors.additionalInformation)
            }
            helperText={
              form.touched.additionalInformation &&
              form.errors.additionalInformation
            }
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ReCAPTCHA sitekey={ReCAPTCHA_KEY} onChange={onChange} />
        </Grid>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {isSubmitting ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              size="large"
              sx={{ minWidth: "14rem", color: (t) => t.palette.text.secondary }}
              type="submit"
            >
              Submit
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
