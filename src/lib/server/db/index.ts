
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '$lib/server/db/schema';

const connectionString = 'postgresql://postgres:sveltedbpass@localhost:5432/svelte_db'

// Disable prefetch as it is not supported for "Transaction" pool mode 
const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client, { schema });

