export default function Hero() {
  return (
    <section style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '48px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)'
    }}>
      <div>
        <h1 style={{
          fontSize: '3rem',
          color: '#f8fafc',
          marginBottom: '16px'
        }}>
          Salut, je suis Boubacar 👋
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#94a3b8',
          marginBottom: '32px',
          lineHeight: '1.7'
        }}>
          Je crée des sites web modernes avec React & Next.js
        </p>
        <a href="#projets" style={{
          display: 'inline-block',
          backgroundColor: '#38bdf8',
          color: '#0f172a',
          padding: '14px 36px',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: '1rem'
        }}>
          Voir mes projets
        </a>
      </div>
    </section>
  )
}