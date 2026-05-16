'use client'

import { useState } from 'react'

const services = [
  {
    nom: 'Site Vitrine Basic',
    description: 'Site web professionnel HTML/CSS, responsive, livré en 5 jours',
    prix: 250,
    emoji: '🌐',
    features: ['Design moderne', 'Responsive mobile', '3 pages', 'Formulaire contact']
  },
  {
    nom: 'Site React Pro',
    description: 'Site Next.js dynamique avec base de données Supabase',
    prix: 700,
    emoji: '⚡',
    features: ['Next.js + React', 'Base de données', 'Dashboard admin', 'Déploiement Vercel']
  },
  {
    nom: 'Site IA Premium',
    description: 'Site Next.js avec assistant IA intégré et paiements en ligne',
    prix: 1500,
    emoji: '🤖',
    features: ['Assistant IA', 'Paiements Stripe', 'Base de données', 'Support 3 mois']
  }
]

export default function Services() {
  const [chargement, setChargement] = useState(null)

  async function payer(service) {
    setChargement(service.nom)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ produit: service })
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      }

    } catch (error) {
      alert('Erreur lors du paiement. Réessayez !')
    }

    setChargement(null)
  }

  return (
    <main style={{
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      padding: '80px 48px'
    }}>

      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#f8fafc',
          marginBottom: '16px'
        }}>
          Mes Services 💼
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Choisissez le pack qui correspond à votre projet
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {services.map((service) => (
          <div key={service.nom} style={{
            backgroundColor: '#1e293b',
            borderRadius: '20px',
            padding: '36px 28px',
            border: '1px solid #334155',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'transform 0.2s',
          }}>

            <div style={{ fontSize: '2.5rem' }}>{service.emoji}</div>

            <h2 style={{
              fontSize: '1.3rem',
              color: '#f8fafc',
              margin: 0
            }}>
              {service.nom}
            </h2>

            <p style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              margin: 0
            }}>
              {service.description}
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {service.features.map((feature) => (
                <li key={feature} style={{
                  color: '#94a3b8',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ color: '#22c55e' }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#38bdf8',
              margin: '8px 0'
            }}>
              {service.prix}€
            </div>

            <button
              onClick={() => payer(service)}
              disabled={chargement === service.nom}
              style={{
                backgroundColor: chargement === service.nom ? '#334155' : '#38bdf8',
                color: chargement === service.nom ? '#94a3b8' : '#0f172a',
                border: 'none',
                padding: '14px',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: chargement === service.nom ? 'not-allowed' : 'pointer',
                marginTop: 'auto'
              }}
            >
              {chargement === service.nom ? '⏳ Chargement...' : '💳 Commander maintenant'}
            </button>

          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <a href="/" style={{
          color: '#94a3b8',
          textDecoration: 'none',
          fontSize: '0.9rem'
        }}>
          ← Retour à l'accueil
        </a>
      </div>

    </main>
  )
}