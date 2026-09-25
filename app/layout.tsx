import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Viraj Jadhav · Full-Stack Developer & Creator',
  description: 'Viraj Jadhav is a full-stack developer and creator building useful things for the web.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
