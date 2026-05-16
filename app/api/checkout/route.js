import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  try {
    const { produit } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: produit.nom,
              description: produit.description,
            },
            unit_amount: produit.prix * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/succes`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/services`,
    })

    return Response.json({ url: session.url })

  } catch (error) {
    console.error('Erreur Stripe:', error)
    return Response.json(
      { error: 'Erreur lors de la création du paiement' },
      { status: 500 }
    )
  }
}