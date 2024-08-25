
import pdf from "pdf-parse"


export async function extractTextFromPDF(buffer: Buffer) {
    if(buffer instanceof Buffer)
    {

        const data = await pdf(buffer);
        return data.text;
    }
}