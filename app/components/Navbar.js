'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)

  const liens = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'À propos', href: '/apropos' },
  { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav style={{
      padding: '20px 48px',
      backgroundColor: '#1e293b',
      borderBottom: '1px solid #334155',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{
          fontSize: '1.4rem',
          fontWeight: 'bold',
          color: '#38bdf8',
          textDecoration: 'none'
        }}>
          👨‍💻 Boubacar Dev
        </Link>

        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '32px',
          margin: 0,
          padding: 0
        }}>
          {liens.map((lien) => (
            <li key={lien.label}>
              <Link href={lien.href} style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '0.95rem'
              }}>
                {lien.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}