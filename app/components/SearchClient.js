"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SearchClient() {
const [query1, setQuery1] = useState('')
const [query2, setQuery2] = useState('')
const [error, setError] = useState('')
const inputRef1 = useRef(null)
const inputRef2 = useRef(null)
const lastFetchTimeRef = useRef(null)
const router = useRouter()

useEffect(() => {
if (inputRef1.current) {
    inputRef1.current.focus()
}
}, [])

const handleSearch = async () => {
const now = Date.now()

if (lastFetchTimeRef.current && now - lastFetchTimeRef.current < 3 * 60 * 1000) {
    setError('Please wait 3 minutes before searching again.')
    return
}

if (!query1.trim()) {
    setError('Please enter a destination')
    return
}

lastFetchTimeRef.current = now
router.push(`/results?query1=${encodeURIComponent(query1)}&query2=${encodeURIComponent(query2 || 'Delhi')}`)
}

return (
<div style={{
    backgroundImage: `url('/luca-bravo-O453M2Liufs-unsplash.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    color: 'white',
    }}
>
    <div className="input-container">
    <div className="input_container2">
        <input
        ref={inputRef2}
        type="text"
        placeholder="Where are you traveling from"
        value={query2}
        onChange={(e) => setQuery2(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <input
        ref={inputRef1}
        type="text"
        placeholder="Enter destination city, country or landmark..."
        value={query1}
        onChange={(e) => setQuery1(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        aria-label="Destination search"
        />
    </div>
    <button
        onClick={handleSearch}
        aria-label="Search"
    >
        Search
    </button>
    </div>

    {error && (
    <div>{error}</div>
    )}
</div>
)
}
