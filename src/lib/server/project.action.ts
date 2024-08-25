import { eq } from 'drizzle-orm';
import { db } from './db';
import { projects } from './db/schema';

export async function loadProjects() {
	const data = await db.select().from(projects);

	return data;
}

export async function getProject(id: string) {
	const data = await db.query.projects.findFirst({
		where: eq(projects.id, id),
		with:{
			files: true
		}
	});

	console.log(data);
	


	return data;
}

export async function createProject({
	title,
	description
}: {
	title: string | undefined;
	description: string | undefined;
}) {
	if (!title) throw new Error('Title is required');
	const data = await db.insert(projects).values({ title, description }).returning();
	return data;
}
