'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Contact() {
  const [envoye, setEnvoye] = useState(false)
  const [chargement, setChargement] = useState(false)
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [messageTexte, setMessageTexte] = useState('')

  async function envoyerMessage() {
    // Vérification basique
    if (!nom || !email || !messageTexte) {
      alert('Remplis tous les champs !')
      return
    }

    setChargement(true)

    // Envoyer à Supabase
    const { error } = await supabase
      .from('messages')
      .insert([{ nom, email, message: messageTexte }])

    if (error) {
      alert('Erreur lors de l envoi. Réessaie !')
      console.error(error)
    } else {
      setEnvoye(true)
    }

    setChargement(false)
  }

  return (
    <main style={{
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px'
    }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>

        <h1 style={{
          fontSize: '2.5rem',
          color: '#38bdf8',
          marginBottom: '8px',
          textAlign: 'center'
        }}>
          Contact 📧
        </h1>

        <p style={{
          color: '#94a3b8',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Tu as un projet ? Écris-moi, je réponds sous 24h.
        </p>

        {envoye ? (
          <div style={{
            backgroundColor: '#1e293b',
            border: '1px solid #38bdf8',
            borderRadius: '16px',
            padding: '48px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
            <h2 style={{ color: '#38bdf8', marginBottom: '8px' }}>
              Message envoyé !
            </h2>
            <p style={{ color: '#94a3b8' }}>
              Je te réponds dans les 24h.
            </p>
          </div>
        ) : (
          <div style={{
            backgroundColor: '#1e293b',
            borderRadius: '16px',
            padding: '40px',
            border: '1px solid #334155',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Ton prénom
              </label>
              <input
                type="text"
                placeholder="Ex: Aminata"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #334155',
                  backgroundColor: '#0f172a',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Ton email
              </label>
              <input
                type="email"
                placeholder="Ex: aminata@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #334155',
                  backgroundColor: '#0f172a',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Ton message
              </label>
              <textarea
                placeholder="Décris ton projet..."
                rows={4}
                value={messageTexte}
                onChange={(e) => setMessageTexte(e.target.value)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #334155',
                  backgroundColor: '#0f172a',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              onClick={envoyerMessage}
              disabled={chargement}
              style={{
                backgroundColor: chargement ? '#334155' : '#38bdf8',
                color: chargement ? '#94a3b8' : '#0f172a',
                border: 'none',
                padding: '14px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: chargement ? 'not-allowed' : 'pointer'
              }}
            >
              {chargement ? 'Envoi en cours...' : 'Envoyer le message 🚀'}
            </button>

          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <a href="/" style={{
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}>
            ← Retour à l'accueil
          </a>
        </div>

      </div>
    </main>
  )
}