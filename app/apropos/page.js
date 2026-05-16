export default function Apropos() {
  return (
    <main style={{
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px'
    }}>
      <div style={{ maxWidth: '700px', textAlign: 'center' }}>

        <div style={{ fontSize: '4rem', marginBottom: '24px' }}>👨‍💻</div>

        <h1 style={{
          fontSize: '2.5rem',
          color: '#38bdf8',
          marginBottom: '24px'
        }}>
          À propos de moi
        </h1>

        <p style={{
          color: '#94a3b8',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          marginBottom: '32px'
        }}>
          Je suis Boubacar, développeur web freelance basé à Dakar.
          Je crée des sites web modernes et professionnels pour les
          entreprises, restaurants, salons et entrepreneurs.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {[
            { emoji: '⚡', label: 'Next.js' },
            { emoji: '🎨', label: 'CSS / Tailwind' },
            { emoji: '🗄️', label: 'Supabase' },
            { emoji: '💳', label: 'Stripe' },
          ].map((skill) => (
            <div key={skill.label} style={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '20px',
              color: '#f8fafc'
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
                {skill.emoji}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                {skill.label}
              </div>
            </div>
          ))}
        </div>

        <a href="/" style={{
          display: 'inline-block',
          backgroundColor: '#38bdf8',
          color: '#0f172a',
          padding: '14px 36px',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
          ← Retour à l'accueil
        </a>

      </div>
    </main>
  )
}