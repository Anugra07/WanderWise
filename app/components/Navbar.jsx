'use client'

import Link from 'next/link'

export default function Navbar() {
return (
<nav className="Navbar">
    <Link href="/" className="text-xl font-bold">✈️ TravelApp</Link>
    <div className="space-x-4">
    <Link href="/">Home</Link>
    <Link href="/results">Results</Link>
    </div>
</nav>
)
}
