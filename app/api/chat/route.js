import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request) {
  try {
    const { message } = await request.json()

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 500,
      system: `Tu es l'assistant virtuel de Boubacar, développeur web freelance basé à Dakar.
      
Tu aides les visiteurs à comprendre ses services et à le contacter.

Informations sur Boubacar :
- Il crée des sites web modernes avec Next.js et React
- Il travaille avec Supabase pour les bases de données
- Ses tarifs : sites vitrines à partir de 150 000 FCFA, sites avec base de données à partir de 600 000 FCFA
- Il répond sous 24h
- Email : contact@boubacar.dev
- Basé à Dakar, Sénégal
- Il parle français et wolof

Réponds toujours en français, de manière amicale et professionnelle.
Garde tes réponses courtes (3-4 phrases maximum).`,
      messages: [
        { role: 'user', content: message }
      ]
    })

    return Response.json({
      reply: response.content[0].text
    })

  } catch (error) {
    console.error('Erreur Claude API:', error)
    return Response.json(
      { error: 'Erreur lors de la communication avec l\'IA' },
      { status: 500 }
    )
  }
}