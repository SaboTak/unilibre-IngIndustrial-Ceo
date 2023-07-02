import '../share/styles/globals.css'
import { Ubuntu } from 'next/font/google';
const inter = Ubuntu(
  { weight: ["400", "300", "500", "700"], subsets: ['latin'], variable: '--font-family', },
)

export const metadata = {
  title: 'Ingenieria Industrial',
  description: 'El mejor programa de Ingenieria Industrial Universitario',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
