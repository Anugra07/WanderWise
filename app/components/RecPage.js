import React from "react"

export default function RecPage() {
const treks = [
{
    name: "Phulara Ridge Trek",
    location: "Uttarakhand",
    highlights: "Unique ridge walk offering panoramic views of snow-capped peaks.",
    bestTime: "May to June, September to October"
},
{
    name: "Ali Bedni Bugyal Trek",
    location: "Uttarakhand",
    highlights: "Expansive alpine meadows with breathtaking views of Mt. Trishul and Mt. Nanda Ghunti.",
    bestTime: "May to June, September to October"
},
{
    name: "Gurez Valley Trek",
    location: "Jammu & Kashmir",
    highlights: "Remote valley with lush landscapes and rich cultural experiences.",
    bestTime: "June to September"
},
{
    name: "Ranthan Kharak Trek",
    location: "Kumaon, Uttarakhand",
    highlights: "Hidden clearings and panoramic views of the Garhwal mountain ranges.",
    bestTime: "May to June, September to October"
},
{
    name: "Chandrakhani Pass Trek",
    location: "Himachal Pradesh",
    highlights: "Lush forests, vibrant meadows, and stunning mountain vistas.",
    bestTime: "May to June, September to October"
},
{
    name: "Surya Top Trek",
    location: "Uttarakhand",
    highlights: "Vast alpine meadows and a summit offering expansive views.",
    bestTime: "May to June, September to October"
},
{
    name: "Dayara Bugyal Trek",
    location: "Uttarakhand",
    highlights: "Gentle slopes leading to one of the most beautiful high-altitude meadows.",
    bestTime: "May to June, September to October"
},
{
    name: "Nag Tibba Trek",
    location: "Uttarakhand",
    highlights: "Forests, snow-clad mountains, and starry night skies.",
    bestTime: "February to June, September to December"
},
{
    name: "Panwali Kantha Trek",
    location: "Uttarakhand",
    highlights: "Uncrowded trail with panoramic Himalayan views.",
    bestTime: "May to June, September to October"
},
{
    name: "Bhrigu Lake Trek",
    location: "Himachal Pradesh",
    highlights: "High-altitude lake with changing colors, surrounded by snow-capped peaks.",
    bestTime: "May to October"
}
]

return (
<div className="p-6">
    <h1 className="text-3xl font-bold mb-8 text-center">🌄 Trekking Recommendations</h1>
    
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {treks.map((trek, index) => (
        <div
        key={index}
        className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
        >
        <h2 className="text-xl font-bold mb-2 text-gray-800">{trek.name}</h2>
        <p className="text-gray-600"><strong>📍 Location:</strong> {trek.location}</p>
        <p className="text-gray-600"><strong>✨ Highlights:</strong> {trek.highlights}</p>
        <p className="text-gray-600"><strong>🕒 Best Time:</strong> {trek.bestTime}</p>
        <button>Explore</button>
        </div>
    ))}
    </div>
</div>
)
}
