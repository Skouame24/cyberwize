import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, nom, paymentMethod, items, total } = body;

    if (!email || !nom || !items?.length) {
      return NextResponse.json({ error: "Données de commande incomplètes." }, { status: 400 });
    }

    const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`;
    const licenseKey = `CWF-LIC-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;

    // Prêt pour Stripe / Mobile Money / génération licence automatique
    console.info("[checkout]", { orderId, email, paymentMethod, total, items });

    return NextResponse.json({
      ok: true,
      orderId,
      licenseKey,
      message:
        "Commande enregistrée. Vos licences et le guide d'installation seront envoyés par email.",
    });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
