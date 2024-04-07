import { defineConfig } from "orval";
import "dotenv/config";
import path from "path";

const target = path.join(__dirname, "pkg", "swagger.yml");
export default defineConfig({
  zod: {
    input: {
      target: target,
      validation: false,
    },
    output: {
      mode: "tags",
      target: ".zod/index.ts",
      schemas: ".zod/types",
      client: "zod",
    },
  },
  axios: {
    input: {
      target: target,
      validation: false,
    },
    output: {
      mode: "tags",
      target: ".axios/index.ts",
      schemas: ".axios/types",
      client: "axios-functions",
    },
  },
});
