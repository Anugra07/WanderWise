'use client';

import React, { useEffect, useState } from "react";

export default function RecPage() {
const [treks, setTreks] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchTreks = async () => {
    try {
    const res = await fetch("/api/Offbeat");
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    setTreks(data);
    } catch (error) {
    console.error("Error:", error);
    } finally {
    setLoading(false);
    }
};

fetchTreks();
}, []);

return (
<div className="p-6">
    <h1 className="text-3xl font-bold mb-8 text-center">🌄 Trekking Recommendations</h1>

    {loading ? (
    <p className="text-center text-gray-500">Loading...</p>
    ) : (
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
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Explore</button>
        </div>
        ))}
    </div>
    )}
</div>
);
}
