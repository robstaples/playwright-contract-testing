import { test, expect } from "@playwright/test";
import { getApiV1Authors } from "../.axios/authors";
import { getApiV1AuthorsResponse } from "../.zod/authors";

test("Get Authors", async () => {
  const response = await getApiV1Authors();

  expect(response.status).toBe(200);
  expect(response.data).toMatchSchema(getApiV1AuthorsResponse);
});
