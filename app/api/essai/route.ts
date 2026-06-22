import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, tel, appareils } = body;

    if (!nom || !email) {
      return NextResponse.json(
        { error: "Le nom et l'adresse e-mail sont obligatoires." },
        { status: 400 }
      );
    }

    const agillyEmail = process.env.AGILLY_CONTACT_EMAIL || "contact@agilly.net";
    const subject = `⚠️ Nouvelle Demande d'accès d'essai - Cyberwize Family`;
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Demande d'essai Cyberwize Family</title>
          <style>
            @media only screen and (max-width: 600px) {
              .container { width: 100% !important; padding: 15px !important; }
              .meta-table td { display: block !important; width: 100% !important; box-sizing: border-box; }
              .meta-table tr { display: block; border-bottom: 1px solid #e8e4de; padding: 10px 0; }
              .meta-table td:first-child { font-weight: bold; padding-bottom: 4px !important; }
              .meta-table td:last-child { padding-top: 0 !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #fcfbfa; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fcfbfa; padding: 40px 10px;">
            <tr>
              <td align="center">
                <!-- Wrapper -->
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="container" style="background-color: #ffffff; border: 1px solid #e8e4de; border-radius: 0; text-align: left; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
                  
                  <!-- Top Accent Bar -->
                  <tr>
                    <td height="4" style="background-color: #f0822a; line-height: 4px; font-size: 4px;">&nbsp;</td>
                  </tr>
                  
                  <!-- Main Content Area -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <!-- Header/Brand -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td>
                            <span style="font-family: 'Arial Rounded MT Bold', sans-serif; font-size: 11px; font-weight: bold; letter-spacing: 0.28em; color: #f0822a; text-transform: uppercase; display: block; margin-bottom: 8px;">
                              // CYBERWIZE · NOTIFICATION
                            </span>
                            <h1 style="font-family: 'Arial Rounded MT Bold', sans-serif; font-size: 20px; font-weight: bold; color: #000000; margin: 0; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1.3;">
                              Demande d&apos;accès d&apos;essai
                            </h1>
                          </td>
                        </tr>
                      </table>
                      
                      <div style="height: 1px; background-color: #e8e4de; margin: 24px 0;"></div>
                      
                      <!-- Intro Text -->
                      <p style="font-size: 14px; line-height: 1.6; color: #535b6a; margin: 0 0 24px 0;">
                        Une nouvelle demande d&apos;accès pour la version d&apos;essai de 14 jours de <strong>Cyberwize Family</strong> a été soumise. Veuillez consulter les informations ci-dessous pour traiter cette demande :
                      </p>
                      
                      <!-- Data Grid -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="meta-table" style="margin-bottom: 24px;">
                        <tr style="border-bottom: 1px solid #f0eeea;">
                          <td style="padding: 12px 0; font-size: 13px; color: #535b6a; font-weight: bold; width: 35%; vertical-align: top;">
                            Nom complet
                          </td>
                          <td style="padding: 12px 0; font-size: 14px; color: #000000; font-weight: bold; vertical-align: top;">
                            ${nom}
                          </td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f0eeea;">
                          <td style="padding: 12px 0; font-size: 13px; color: #535b6a; font-weight: bold; vertical-align: top;">
                            Adresse Email
                          </td>
                          <td style="padding: 12px 0; font-size: 14px; color: #000000; vertical-align: top;">
                            <a href="mailto:${email}" style="color: #f0822a; text-decoration: none; font-weight: bold;">${email}</a>
                          </td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f0eeea;">
                          <td style="padding: 12px 0; font-size: 13px; color: #535b6a; font-weight: bold; vertical-align: top;">
                            Téléphone
                          </td>
                          <td style="padding: 12px 0; font-size: 14px; color: #000000; vertical-align: top;">
                            ${tel || "Non renseigné"}
                          </td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f0eeea;">
                          <td style="padding: 12px 0; font-size: 13px; color: #535b6a; font-weight: bold; vertical-align: top;">
                            Appareils à protéger
                          </td>
                          <td style="padding: 12px 0; font-size: 14px; color: #000000; vertical-align: top;">
                            ${appareils || 5}
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Action Required Box -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #faf8f5; border-left: 3px solid #f0822a; border-radius: 0;">
                        <tr>
                          <td style="padding: 20px;">
                            <h4 style="margin: 0 0 8px 0; font-family: 'Arial Rounded MT Bold', sans-serif; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #f0822a; letter-spacing: 0.1em;">
                              Action requise
                            </h4>
                            <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #535b6a;">
                              Veuillez contacter le client à l&apos;adresse ci-dessus pour lui transmettre les informations de licence et guider l&apos;activation de ses appareils.
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #faf8f5; padding: 24px 30px; border-top: 1px solid #e8e4de; text-align: center;">
                      <p style="margin: 0; font-size: 11px; color: #6b6359; letter-spacing: 0.05em;">
                        © ${new Date().getFullYear()} Agilly · Cyberwize Family. Tous droits réservés.
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Envoyer l'email à l'équipe Agilly
    await sendEmail({
      to: agillyEmail,
      subject: subject,
      html: htmlContent,
    });

    return NextResponse.json({
      ok: true,
      message: "La demande d'accès a été transmise avec succès à l'équipe Agilly.",
    });
  } catch (error) {
    console.error("[API Essai Error]", error);
    return NextResponse.json({ error: "Erreur lors du traitement de la demande." }, { status: 500 });
  }
}
