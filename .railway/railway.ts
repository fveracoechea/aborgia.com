import { defineRailway, github, preserve, project, service } from "railway/iac";

export default defineRailway(() => {
  const web = service("web", {
    source: github("fveracoechea/aborgia.com", { branch: 'master' }),
    build: {
      dockerfilePath: "Dockerfile",
    },
    env: {
      RESEND_API_KEY: preserve(),
      RECAPTCHA_ENABLED: "false",
      VITE_RECAPTCHA_ENABLED: "false",
      RECAPTCHA_PROJECT_ID: preserve(),
      VITE_RECAPTCHA_SITE_KEY: preserve(),
    },
  });

  return project("aborgia.com", {
    resources: [web],
  });
});
