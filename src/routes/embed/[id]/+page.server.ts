
import { getProject } from "$lib/server/project.action.js";

export async function load({params}) {
    const data = await getProject(params?.id);

    return data;

}