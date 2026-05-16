'use client'

import { useState } from 'react'

export default function Chat() {
  const [ouvert, setOuvert] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '👋 Bonjour ! Je suis l\'assistant de Boubacar. Comment puis-je vous aider ?'
    }
  ])
  const [input, setInput] = useState('')
  const [chargement, setChargement] = useState(false)

  async function envoyerMessage() {
    if (!input.trim() || chargement) return

    const nouveauMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, nouveauMessage])
    setInput('')
    setChargement(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })

      const data = await response.json()

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply
      }])

    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Désolé, une erreur s\'est produite. Réessayez !'
      }])
    }

    setChargement(false)
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 1000
    }}>

      {/* Fenêtre chat */}
      {ouvert && (
        <div style={{
          width: '340px',
          height: '480px',
          backgroundColor: '#1e293b',
          borderRadius: '16px',
          border: '1px solid #334155',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
        }}>

          {/* Header */}
          <div style={{
            padding: '16px 20px',
            borderBottom: '1px solid #334155',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#38bdf8',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem'
            }}>
              🤖
            </div>
            <div>
              <div style={{ color: '#f8fafc', fontWeight: 'bold', fontSize: '0.95rem' }}>
                Assistant Boubacar
              </div>
              <div style={{ color: '#22c55e', fontSize: '0.75rem' }}>
                ● En ligne
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '10px 14px',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  backgroundColor: msg.role === 'user' ? '#38bdf8' : '#0f172a',
                  color: msg.role === 'user' ? '#0f172a' : '#f8fafc',
                  fontSize: '0.88rem',
                  lineHeight: '1.5'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {chargement && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '10px 14px',
                  borderRadius: '16px 16px 16px 4px',
                  backgroundColor: '#0f172a',
                  color: '#94a3b8',
                  fontSize: '0.88rem'
                }}>
                  ⏳ En train d'écrire...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{
            padding: '12px 16px',
            borderTop: '1px solid #334155',
            display: 'flex',
            gap: '8px'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && envoyerMessage()}
              placeholder="Posez votre question..."
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #334155',
                backgroundColor: '#0f172a',
                color: '#f8fafc',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
            <button
              onClick={envoyerMessage}
              disabled={chargement}
              style={{
                backgroundColor: '#38bdf8',
                color: '#0f172a',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 14px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              ➤
            </button>
          </div>

        </div>
      )}

      {/* Bouton flottant */}
      <button
        onClick={() => setOuvert(!ouvert)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#38bdf8',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          boxShadow: '0 4px 20px rgba(56, 189, 248, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto'
        }}
      >
        {ouvert ? '✕' : '🤖'}
      </button>

    </div>
  )
}