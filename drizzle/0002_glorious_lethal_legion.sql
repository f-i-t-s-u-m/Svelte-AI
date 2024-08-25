CREATE TABLE IF NOT EXISTS "files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"file_name" text NOT NULL,
	"file_size" integer,
	"project_id" uuid NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
