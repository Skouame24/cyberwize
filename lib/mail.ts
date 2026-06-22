interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  const agillyContact = process.env.AGILLY_CONTACT_EMAIL || "contact@agilly.net";
  const resendApiKey = process.env.RESEND_API_KEY;

  console.info(`[Mail Service] Tentative d'envoi d'e-mail à : ${to} | Sujet : ${subject}`);

  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Cyberwize Family <onboarding@resend.dev>", // À remplacer par votre adresse vérifiée (ex: no-reply@agilly.net) une fois configurée sur Resend
          to: [to],
          subject: subject,
          html: html,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("[Mail Service] Erreur Resend API :", data);
        return { success: false, error: data };
      }

      console.info("[Mail Service] E-mail envoyé avec succès via Resend ! ID :", data.id);
      return { success: true, id: data.id };
    } catch (error) {
      console.error("[Mail Service] Exception lors de l'envoi via Resend :", error);
      return { success: false, error };
    }
  }

  // Fallback local ou si non configuré
  console.warn(
    "[Mail Service] Aucune clé API Resend configurée. L'e-mail a été consigné dans la console."
  );
  return {
    success: true,
    simulated: true,
    message: "Email simulé avec succès.",
  };
}
