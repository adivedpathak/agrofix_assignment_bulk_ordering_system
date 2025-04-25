// drizzle.config.ts

import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/app/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    host: "ep-still-block-a49hgqcp-pooler.us-east-1.aws.neon.tech",
    user: "bulk_ordering_owner",
    password: "npg_ITbcPv2Ej3aB",
    database: "bulk_ordering",
    ssl: "require",
  },
});



// if change is made to the schema, run the following command to update the database:
// npx drizzle-kit push --out ./drizzle --schema ./src/app/db/schema.ts