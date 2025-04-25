// src/db/index.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const client = postgres("postgresql://bulk_ordering_owner:npg_ITbcPv2Ej3aB@ep-still-block-a49hgqcp-pooler.us-east-1.aws.neon.tech/bulk_ordering?sslmode=require"); // from .env.local
export const db = drizzle(client, { schema });
