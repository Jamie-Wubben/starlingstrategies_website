import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, interest, message, locale = 'en' } = body;

        // Check if SMTP credentials are provided
        const smtpHost = process.env.SMTP_HOST;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;

        // Localized Confirmation Email Templates
        const confirmationTemplates: Record<string, { subject: string; text: string }> = {
            en: {
                subject: 'We received your message - Starling Strategies',
                text: `Dear ${name},\n\nThank you for contacting Starling Strategies. I have received your message regarding "${interest}" and will get back to you shortly.\n\nBest regards,\nDr. Jamie Wubben`
            },
            nl: {
                subject: 'We hebben uw bericht ontvangen - Starling Strategies',
                text: `Beste ${name},\n\nBedankt voor uw bericht aan Starling Strategies. Ik heb uw bericht over "${interest}" ontvangen en neem spoedig contact met u op.\n\nMet vriendelijke groet,\nDr. Jamie Wubben`
            },
            es: {
                subject: 'Hemos recibido su mensaje - Starling Strategies',
                text: `Estimado/a ${name},\n\nGracias por contactar con Starling Strategies. He recibido su mensaje sobre "${interest}" y le responderé en breve.\n\nSaludos cordiales,\nDr. Jamie Wubben`
            }
        };

        const userTemplate = confirmationTemplates[locale as string] || confirmationTemplates['en'];

        if (smtpHost && smtpUser && smtpPass) {
            const port = parseInt(process.env.SMTP_PORT || '587');
            const isSecure = port === 465;

            // Real Email Sending
            const transporter = nodemailer.createTransport({
                host: smtpHost,
                port: port,
                secure: isSecure, // true for 465, false for other ports
                auth: {
                    user: smtpUser,
                    pass: smtpPass,
                },
            });

            // 1. Send Admin Notification
            await transporter.sendMail({
                from: `"Starling Strategies Contact" <${smtpUser}>`,
                to: 'info@starlingstrategies.be',
                replyTo: email,
                subject: `New Contact Form Submission: ${interest}`,
                text: `
Name: ${name}
Email: ${email}
Interest: ${interest}
Locale: ${locale}

Message:
${message}
                `,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Interest:</strong> ${interest}</p>
                    <p><strong>Locale:</strong> ${locale}</p>
                    <br/>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `,
            });

            // 2. Send User Confirmation
            await transporter.sendMail({
                from: `"Starling Strategies" <${smtpUser}>`,
                to: email,
                subject: userTemplate.subject,
                text: userTemplate.text,
            });

            console.log('Emails sent successfully via SMTP');
        } else {
            // Mock Mode (Log to console)
            console.log('--- MOCK EMAIL SEND (SMTP not configured) ---');
            console.log('--- Admin Notification ---');
            console.log('To: info@starlingstrategies.be');
            console.log(`From: ${name} <${email}>`);
            console.log(`Interest: ${interest}`);
            console.log(`Message: ${message}`);

            console.log('--- User Confirmation ---');
            console.log(`To: ${email}`);
            console.log(`Subject: ${userTemplate.subject}`);
            console.log(`Body: ${userTemplate.text}`);
            console.log('---------------------------------------------');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
