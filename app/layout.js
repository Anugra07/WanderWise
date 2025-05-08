import './globals.css'
import Navbar from '@/app/components/Navbar' 

export const metadata = {
  title: 'Travel App',
  description: 'Find travel recommendations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
