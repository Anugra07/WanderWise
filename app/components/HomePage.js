
import React from "react"
import SearchClient from "./SearchClient"
import RecPage from "./RecPage"

export default function HomePage() {
return (
<div>
    <h1 className="text-4xl font-bold mb-8 animate-float">🌍 WanderWise Travel Explorer</h1>
    <div className="bg-white bg-opacity-80 rounded-lg p-6 max-w-xl w-full shadow-lg card">
    <SearchClient />
    </div>
    <div>
        <h1>Reccomendations</h1>
        <RecPage/>
    </div>
</div>
)
}
