export async function GET(req) {
const { searchParams } = new URL(req.url);
const query = searchParams.get('query1');
const query1 = searchParams.get('query2')

if (!query) {
    return Response.json({ error: 'No query provided' }, { status: 400 });
}

const apiKey = process.env.GEMINI_API_KEY;

try {
    const geminiResponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        contents: [
            {
            parts: [
                {
                text: `i am travelling for the first time and i want to travel from ${query1} to ${query} i want to travel in the least money possible and provide me a point to point travel options in bullet bullet points`,
                },
            ],
            role: 'user',
            },
        ],
        }),
    }
    );

    const data = await geminiResponse.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    const titles = text
    .split('\n')
    .filter(line => line.trim())
    .map(line => line.replace(/^[-•*\d.]+\s*/, '').trim());

    return Response.json({ titles });

} catch (err) {
    console.error('Gemini API error:', err);
    return Response.json({ error: 'Failed to fetch travel options' }, { status: 500 });
}
}
