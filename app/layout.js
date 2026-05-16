import Chat from './components/Chat'
import './globals.css'

export const metadata = {
  title: 'Boubacar - Développeur Web',
  description: 'Portfolio de Boubacar, développeur web freelance à Dakar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <Chat />
      </body>
    </html>
  )
}