import { expect } from "@playwright/test";
import { type ZodTypeAny } from "zod";

expect.extend({
  toMatchSchema(received: unknown, schema: ZodTypeAny) {
    const result = schema.safeParse(received);
    if (result.success) {
      return {
        message: () => "schema matched",
        pass: true,
      };
    } else {
      return {
        message: () =>
          "Result does not match schema: " +
          result.error.issues.map((issue) => issue.message).join("\n") +
          "\n" +
          "Details: " +
          JSON.stringify(result.error, null, 2),
        pass: false,
      };
    }
  },
});
