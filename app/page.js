import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

const projets = [
  {
    emoji: '🍕',
    titre: 'Chez Mamadou',
    description: 'Site vitrine pour un restaurant africain avec menu et contact.',
    lien: 'https://boubacar-collab.github.io/site-de-restaurant/'
  },
  {
    emoji: '✂️',
    titre: 'Salon Fatou',
    description: 'Site salon de coiffure avec formulaire de réservation.',
    lien: 'https://boubacar-collab.github.io/site-coiffure/'
  },
  {
    emoji: '🚧',
    titre: 'Bientôt...',
    description: 'Un nouveau projet est en cours de création.',
    lien: '#'
  }
]

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0f172a', minHeight: '100vh' }}>

      <Navbar />

      <Hero />

      <section id="projets" style={{
        padding: '80px 48px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#38bdf8',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          Mes Projets
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {projets.map((projet) => (
            <Card
              key={projet.titre}
              emoji={projet.emoji}
              titre={projet.titre}
              description={projet.description}
              lien={projet.lien}
            />
          ))}
        </div>
      </section>

    </main>
  )
}