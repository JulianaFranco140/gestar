import './globals.css'

export const metadata = {
  title: 'GeStar - Tu embarazo conectado',
  description: 'La plataforma integral que acompaña cada momento de tu gestación',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icono.png',
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
