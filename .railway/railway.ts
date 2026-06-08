import { defineRailway, github, project, service } from "railway/iac";

export default defineRailway(() => {
  const web = service("web", {
    source: github("fveracoechea/aborgia.com"),
    build: "bun run build",
    start: "node .output/server/index.mjs",
  });

  return project("aborgia.com", {
    resources: [web],
  });
});
