import React from "react"
import SearchClient from "./SearchClient"
import RecRes from "./RecRes"

export default function HomePage() {
return (
<div className="text-center space-y-8">
    <h1 className="text-5xl font-bold mb-8">🌍 WanderWise Travel Explorer</h1>
    <div className="bg-white bg-opacity-90 rounded-lg p-6 max-w-2xl mx-auto shadow-md">
    <SearchClient />
    </div>
    <div>
    <h2 className="text-3xl font-semibold mb-4">Top Offbeat Treks</h2>
    <RecRes />
    </div>
</div>
)
}