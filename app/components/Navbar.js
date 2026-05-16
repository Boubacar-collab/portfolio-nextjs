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
    <nav className="px-12 py-5 bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="flex justify-between items-center">

        <Link href="/" className="text-sky-400 text-xl font-bold no-underline">
          👨‍💻 Boubacar Dev
        </Link>

        <ul className="list-none flex gap-8 m-0 p-0">
          {liens.map((lien) => (
            <li key={lien.label}>
              <Link href={lien.href} className="text-slate-400 text-sm no-underline hover:text-sky-400 transition-colors duration-200">
                {lien.label}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}