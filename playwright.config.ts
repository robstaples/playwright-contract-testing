import { defineConfig } from "@playwright/test";
import axios from "axios";
import "./fixtures/toMatchSchema";

axios.defaults.baseURL = "https://fakerestapi.azurewebsites.net";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: "line",
  retries: 0,
  workers: 1,
  use: {
    trace: "on-first-retry",
  },
});
