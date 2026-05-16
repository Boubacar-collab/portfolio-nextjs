import Chat from './components/Chat'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Boubacar - Développeur Web',
  description: 'Portfolio de Boubacar, développeur web freelance à Dakar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="m-0 p-0">
        <Navbar />
        {children}
        <Chat />
      </body>
    </html>
  )
}