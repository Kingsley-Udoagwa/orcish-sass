export { default } from "./main.mjs";
export const config = {
  name: "server handler",
  generator: "nitro@3.0.1-20260611-123640-7765bcb7",
  path: "/*",
  nodeBundler: "none",
  includedFiles: ["**"],
  excludedPath: ["/.netlify/*"],
  preferStatic: true,
};