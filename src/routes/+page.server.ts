import { createProject, loadProjects } from '$lib/server/project.action.js';
export async function load() {
    return { data: await loadProjects()};
}
export const actions = {
    create: async ({request}) => {
       const formdata = await request.formData();
       const title =  formdata.get('title')?.toString();
       const description =  formdata.get('description')?.toString();

       const res = await createProject({title, description});
       return res;
       
    }
}