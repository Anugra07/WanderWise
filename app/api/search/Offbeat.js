export async function GET(req) {
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
                text: `List the top 10 best offbeat trekking places in India. For each trek, provide the following details: Name, Location, Highlights, Best Time to Visit. Format the response as:
1. Name: ...
    Location: ...
    Highlights: ...
    Best Time: ...`,
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

    const trekEntries = text.split('\n').filter(line => line.trim());

    const treks = [];
    let currentTrek = {};

    trekEntries.forEach(line => {
    if (/^\d+\./.test(line)) {
        if (Object.keys(currentTrek).length) {
        treks.push(currentTrek);
        }
        currentTrek = {};
        line = line.replace(/^\d+\.\s*/, '');
    }

    if (line.startsWith('Name:')) {
        currentTrek.name = line.replace('Name:', '').trim();
    } else if (line.startsWith('Location:')) {
        currentTrek.location = line.replace('Location:', '').trim();
    } else if (line.startsWith('Highlights:')) {
        currentTrek.highlights = line.replace('Highlights:', '').trim();
    } else if (line.startsWith('Best Time:')) {
        currentTrek.bestTime = line.replace('Best Time:', '').trim();
    }
    });

    if (Object.keys(currentTrek).length) {
    treks.push(currentTrek);
    }

    return Response.json({ treks });

} catch (err) {
    console.error('Gemini API error:', err);
    return Response.json({ error: 'Failed to fetch trekking places' }, { status: 500 });
}
}
