'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ResultsPage() {
const searchParams = useSearchParams()
const query1 = searchParams.get('query1')
const query2 = searchParams.get('query2') || 'Delhi'

const [results, setResults] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')

useEffect(() => {
const fetchResults = async () => {
    try {
    const res = await fetch(`/api/search?query1=${encodeURIComponent(query1)}&query2=${encodeURIComponent(query2)}`)
    const data = await res.json()

    if (!res.ok) throw new Error(data.error || 'Something went wrong')

    setResults(data.titles || [])
    } catch (err) {
    setError(err.message)
    } finally {
    setLoading(false)
    }
}

if (query1) fetchResults()
}, [query1, query2])

if (loading) return <p>Loading travel options...</p>
if (error) return <p>Error: {error}</p>

return (
<div>
    <h1>{query1.toUpperCase()} – Travel Results</h1>
    {results.length > 0 ? (
    <ul>
        {results.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
    ) : (
    <p>No travel options found. Try another destination.</p>
    )}
</div>
)
}
