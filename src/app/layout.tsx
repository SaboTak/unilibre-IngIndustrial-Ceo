import '../share/styles/globals.css'
import { Ubuntu } from 'next/font/google';

const inter = Ubuntu(
  { weight: ["400", "300", "500", "700"], subsets: ['latin'], variable: '--font-family', },
)

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}