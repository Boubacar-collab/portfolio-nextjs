export default function Card({ emoji, titre, description, lien }) {
  return (
    <div style={{
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      padding: '32px 24px',
      border: '1px solid #334155',
      textAlign: 'left',
      transition: 'transform 0.2s'
    }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
        {emoji}
      </div>
      <h3 style={{
        fontSize: '1.2rem',
        color: '#f8fafc',
        marginBottom: '8px'
      }}>
        {titre}
      </h3>
      <p style={{
        fontSize: '0.9rem',
        color: '#94a3b8',
        lineHeight: '1.6',
        marginBottom: '20px'
      }}>
        {description}
      </p>
      <a href={lien} target="_blank" style={{
        color: '#38bdf8',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Voir le site →
      </a>
    </div>
  )
}