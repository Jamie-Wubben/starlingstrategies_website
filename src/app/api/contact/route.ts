import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, interest, message } = body;

        // Check if SMTP credentials are provided
        const smtpHost = process.env.SMTP_HOST;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;

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

            await transporter.sendMail({
                from: `"Starling Strategies Contact" <${smtpUser}>`,
                to: 'info@starlingstrategies.be',
                replyTo: email,
                subject: `New Contact Form Submission: ${interest}`,
                text: `
Name: ${name}
Email: ${email}
Interest: ${interest}

Message:
${message}
                `,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Interest:</strong> ${interest}</p>
                    <br/>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `,
            });

            console.log('Email sent successfully via SMTP');
        } else {
            // Mock Mode (Log to console)
            console.log('--- MOCK EMAIL SEND (SMTP not configured) ---');
            console.log('To: info@starlingstrategies.be');
            console.log(`From: ${name} <${email}>`);
            console.log(`Interest: ${interest}`);
            console.log(`Message: ${message}`);
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
