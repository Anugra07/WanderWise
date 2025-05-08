// app/page.js - Server Component
import HomePage from './components/HomePage';

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* @ts-expect-error Server Component */}
        <HomePage />
      </div>
    </main>
  );
}

// This is a Client Component wrapper
import SearchClient from './components/SearchClient';