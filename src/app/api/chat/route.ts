import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json(); // ✅ parse request body once
  console.log('🔥 Full request body:', body);

  const { messages } = body; // ✅ extract messages from body
  console.log('✅ Extracted messages:', messages);

  // Ensure the messages field is an array
  if (!Array.isArray(messages)) {
    return NextResponse.json({ reply: 'Invalid request.' }, { status: 400 });
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are Akanksha Vadnekar’s assistant. Answer questions about her projects, skills, and experience.',
        },
        ...messages,
      ],
    }),
  });

  const data = await response.json();
  console.log('🧠 OpenAI Response:', JSON.stringify(data, null, 2));

  const reply =
    data.choices?.[0]?.message?.content || "Sorry, I couldn't respond.";

  return NextResponse.json({ reply });
}
