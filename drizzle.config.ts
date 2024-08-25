import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './src/lib/server/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: 'postgresql://postgres:sveltedbpass@localhost:5432/svelte_db',
  },
});