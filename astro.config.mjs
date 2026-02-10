import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const repoName = repository.split("/")[1] ?? "";
const isUserOrOrgPages = repoName.endsWith(".github.io");
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const base = isGitHubActions && repoName && !isUserOrOrgPages ? `/${repoName}` : "/";

export default defineConfig({
  site: "https://sopagame.com",
  base
});
