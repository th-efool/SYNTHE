import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/backend/infrastructure/db/schema";

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error("POSTGRES_URL is not set.");
}

const queryClient = postgres(connectionString, { prepare: false });

export const db = drizzle(queryClient, { schema });
