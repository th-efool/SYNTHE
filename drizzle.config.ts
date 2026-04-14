import type { Config } from "drizzle-kit";

export default {
  schema: "./src/backend/infrastructure/db/schema/drizzle.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL ?? "",
  },
} satisfies Config;
