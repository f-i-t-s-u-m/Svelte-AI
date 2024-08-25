
import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid, vector } from "drizzle-orm/pg-core";

export const projects = pgTable('projects', {
    id: uuid('id').primaryKey().defaultRandom(),
    title: text('title').notNull(),
    description: text('description'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
});

export const projectRelations = relations(projects, ({ many }) => ({
    files: many(files),
}));


export const files = pgTable('files', {
    id:uuid('id').primaryKey().defaultRandom(),
    file_name: text('file_name').notNull(),
    file_size: integer('file_size'),
    file_type: text('file_type').notNull(),
    file_url: text('file_url'),
    vector_id: text('vector_id'),
    vector_url: text('vector_url'),
    content:text('content'),
    project_id: uuid('project_id').notNull(),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
})

export const fileRelations = relations(files, ({ one }) => ({
    project: one(projects, {
        fields: [files.project_id],
        references: [projects.id],
    }),
}));

export const vectors = pgTable('vectors', {
    id: uuid('id').primaryKey().defaultRandom(),
    title:text('title').notNull(),
    content: text('content').notNull(),
    embedding: vector('embedding', {
        'dimensions':1536
    }).notNull(),
    file_id: uuid('file_id'),
    project_id: uuid('project_id')
})

export const vectorRelations = relations(vectors, ({ one }) => ({
    file: one(files, {
        fields: [vectors.file_id],
        references: [files.id],
    }),
    project: one(projects, {
        fields: [vectors.project_id],
        references: [projects.id],
    }),
}));
