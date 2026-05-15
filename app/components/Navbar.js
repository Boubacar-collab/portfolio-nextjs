'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)

  return (
    <nav style={{
      padding: '20px 48px',
      backgroundColor: '#1e293b',
      borderBottom: '1px solid #334155',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>

      {/* Barre principale */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.4rem',
          fontWeight: 'bold',
          color: '#38bdf8'
        }}>
            Boubacar Dev
        </div>

        {/* Menu desktop */}
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '32px',
          margin: 0,
          padding: 0
        }}>
          {['Accueil', 'Projets', 'Contact'].map((lien) => (
            <li key={lien}>
              <a href="#" style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '0.95rem'
              }}>
                {lien}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton burger mobile */}
        <button
          onClick={() => setMenuOuvert(!menuOuvert)}
         style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: '#f8fafc',
            fontSize: '1.5rem',
            cursor: 'pointer'
            }}
        >
          {menuOuvert ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOuvert && (
        <ul style={{
          listStyle: 'none',
          padding: '16px 0 0',
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {['Accueil', 'Projets', 'Contact'].map((lien) => (
            <li key={lien}>
              <a href="#" style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '1rem'
              }}>
                {lien}
              </a>
            </li>
          ))}
        </ul>
      )}

    </nav>
  )
}