import { createOpenAI } from '@ai-sdk/openai';
import { StreamData, streamText } from 'ai';
import type { RequestHandler } from './$types';

import { env } from '$env/dynamic/private';

const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY ?? '',
});



export const POST = (async ({ request }) => {
  const { messages, files  } = await request.json();

  const content = files.map(file => file.content).join('\n');


  const systemMessage = {
    role: 'system',
    content: `You are a helpful assistant. Use the following content as your knowledge base: ${content}`
  };
  const allMessages = [systemMessage, ...messages];

  const data = new StreamData();
  data.append({ test: 'value' });

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    onFinish() {
      data.close();
    },
    messages: allMessages,
  });

  return result.toDataStreamResponse({ data });
}) satisfies RequestHandler;