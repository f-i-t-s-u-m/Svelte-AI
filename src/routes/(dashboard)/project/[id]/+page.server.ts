import { getProject } from '$lib/server/project.action.js';
import {db} from '$lib/server/db';
import { files } from '$lib/server/db/schema';


export async function load({params}) {
    const id = params?.id;
    
    const project = await getProject(id);

    return project;
}

export const actions = {
    create: async({request, params}) => {
        // console.log("req", request);
        const body = await request.formData()
        const file = body.get('file') as File;
        if (file && file instanceof File) {
       const text = await file.text()
       const project_id = params?.id;
        const {name : file_name, size: file_size, type: file_type} = file
       try {

           const res = await db.insert(files).values({file_name, file_type, file_size, project_id, content:text}).returning();
           
           
           return {
            status: 200,
            body: "success",
            file: res[0]
        }
        } catch  {
            return {
                status: 500,
                body: "error",
                file: file?.name
            }
        }
       

      
    }
        
    }
}