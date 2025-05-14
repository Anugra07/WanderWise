// Navbar - components/Navbar.js
'use client'
import Link from 'next/link'

export default function Navbar() {
return (
<nav className="bg-indigo-600 p-4 flex justify-between items-center text-white shadow-md">
    <Link href="/" className="text-2xl font-bold">✈️ TravelApp</Link>
    <div className="space-x-4">
    <Link href="/">Home</Link>
    <Link href="/results">Results</Link>
    </div>
</nav>
)
}