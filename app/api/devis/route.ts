import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nom,
      email,
      telephone,
      entreprise,
      plan,
      appareils,
      message,
    } = body;

    if (!nom || !email) {
      return NextResponse.json({ error: "Nom et email requis." }, { status: 400 });
    }

    const reference = `CWF-${Date.now().toString(36).toUpperCase()}`;
    const trialLink = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://cyberwizefamily.com"}/essai?ref=${reference}`;

    // Prêt pour intégration email (Resend, SendGrid, etc.) + génération PDF serveur
    console.info("[devis]", { reference, email, plan, appareils });

    return NextResponse.json({
      ok: true,
      reference,
      trialLink,
      message:
        "Votre demande a été enregistrée. Un devis PDF vous sera envoyé par email sous 24h, avec votre lien d'essai gratuit 14 jours.",
    });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
