export default function Succes() {
  return (
    <main style={{
      backgroundColor: '#0f172a',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '48px'
    }}>
      <div>
        <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🎉</div>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#22c55e',
          marginBottom: '16px'
        }}>
          Paiement réussi !
        </h1>
        <p style={{
          color: '#94a3b8',
          fontSize: '1.1rem',
          marginBottom: '32px'
        }}>
          Merci pour votre commande ! Boubacar vous contactera sous 24h.
        </p>
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