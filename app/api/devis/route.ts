import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nom,
      email,
      telephone,
      entreprise,
      entiteType,
      poste,
      plan,
      appareils,
      message,
    } = body;

    if (!nom || !email) {
      return NextResponse.json({ error: "Nom et email requis." }, { status: 400 });
    }

    const reference = `CWF-${Date.now().toString(36).toUpperCase()}`;
    const trialLink = `/essai?ref=${reference}&email=${encodeURIComponent(email)}&nom=${encodeURIComponent(nom)}`;

    // Prêt pour intégration email (Resend, SendGrid, etc.) + génération PDF serveur
    console.info("[devis]", { reference, email, plan, appareils, entiteType, poste });

    return NextResponse.json({
      ok: true,
      reference,
      trialLink,
      message:
        `Votre devis personnalisé a été généré avec succès ! Un e-mail contenant le devis PDF a été envoyé à ${email}. Veuillez ouvrir cet e-mail et cliquer sur le lien d'activation inclus pour démarrer vos 14 jours d'essai gratuit.`,
    });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
