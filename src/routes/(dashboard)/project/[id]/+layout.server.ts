import { getProject } from '$lib/server/project.action.js';


export async function load({params}) {
    const id = params?.id;
    
    const project = await getProject(id);

    return project;
}
