// RootLayout - layout.js
import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Travel App',
  description: 'Find travel recommendations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-blue-100 to-indigo-100 text-gray-800 min-h-screen">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
