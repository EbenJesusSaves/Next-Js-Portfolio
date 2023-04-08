import { NavBar } from './components/navbar/NavBar'
import './globals.css'

export const metadata = {
  title: 'Accommodation-with-typescript',
  description: 'Save money and time ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        
        
        {children}</body>
    </html>
  )
}
