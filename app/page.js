import Link from 'next/link'

const projets = [
  {
    emoji: '🍕',
    titre: 'Chez Mamadou',
    description: 'Site vitrine pour un restaurant africain avec menu et contact.',
    lien: 'https://boubacar-collab.github.io/site-de-restaurant/',
    tags: ['HTML', 'CSS', 'Restaurant']
  },
  {
    emoji: '✂️',
    titre: 'Salon Fatou',
    description: 'Site salon de coiffure avec formulaire de réservation.',
    lien: 'https://boubacar-collab.github.io/site-coiffure/',
    tags: ['HTML', 'CSS', 'Formulaire']
  },
  {
    emoji: '⚡',
    titre: 'Portfolio React',
    description: 'Portfolio Next.js avec IA intégrée et paiements Stripe.',
    lien: 'https://portfolio-nextjs-rust-one.vercel.app',
    tags: ['Next.js', 'Supabase', 'IA']
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-br from-slate-900 to-blue-950">
        <div>
          <div className="text-6xl mb-6">👨‍💻</div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Salut, je suis <span className="text-sky-400">Boubacar</span>
          </h1>
          <p className="text-slate-400 text-xl mb-8 max-w-xl mx-auto leading-relaxed">
            Je crée des sites web modernes avec React & Next.js
            pour les entreprises et entrepreneurs.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {['Next.js', 'React', 'Supabase', 'Claude IA', 'Stripe'].map(tag => (
              <span key={tag} className="bg-blue-950 text-sky-400 border border-sky-400 px-4 py-1 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Boutons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/services" className="bg-sky-400 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-sky-300 transition-colors duration-200">
              Voir mes services
            </Link>
            <Link href="/contact" className="border-2 border-sky-400 text-sky-400 px-8 py-3 rounded-lg font-bold hover:bg-sky-400 hover:text-slate-900 transition-all duration-200">
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-400 text-center mb-12">
          Mes Projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map(projet => (
            <div key={projet.titre} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-sky-400 hover:-translate-y-1 transition-all duration-200">
              <div className="text-4xl mb-4">{projet.emoji}</div>
              <h3 className="text-white font-bold text-xl mb-2">{projet.titre}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{projet.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projet.tags.map(tag => (
                  <span key={tag} className="bg-slate-900 text-sky-400 border border-slate-700 px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={projet.lien} target="_blank" className="text-sky-400 font-bold text-sm hover:text-sky-300 transition-colors">
                Voir le site →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { chiffre: '4+', label: 'Sites livrés' },
            { chiffre: '3', label: 'Technologies' },
            { chiffre: '7j', label: 'Délai moyen' },
            { chiffre: '100%', label: 'Satisfaction' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-sky-400 mb-2">{stat.chiffre}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Tu as un projet ? 🚀
        </h2>
        <p className="text-slate-400 text-lg mb-8">
          Je réponds sous 24h et je commence sous 48h.
        </p>
        <Link href="/contact" className="bg-sky-400 text-slate-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-sky-300 transition-colors duration-200">
          Démarrer mon projet
        </Link>
      </section>

    </main>
  )
}