ALTER TABLE "files" ADD COLUMN "file_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "files" ADD COLUMN "file_url" text;--> statement-breakpoint
ALTER TABLE "files" ADD COLUMN "vector_id" text;--> statement-breakpoint
ALTER TABLE "files" ADD COLUMN "vector_url" text;