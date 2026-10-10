import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let htmlContent = "<h2>New Contact Form Submission</h2>";
    htmlContent += "<table style='width: 100%; border-collapse: collapse;'>";
    for (const [key, value] of Object.entries(data)) {
      if(key !== 'formType' && value) {
        htmlContent += "<tr><th style='text-align: left; padding: 8px; border-bottom: 1px solid #ddd;'>" + key + "</th><td style='padding: 8px; border-bottom: 1px solid #ddd;'>" + value + "</td></tr>";
      }
    }
    htmlContent += "</table>";

    const info = await transporter.sendMail({
      from: '"Even Now Website" <' + process.env.SMTP_USER + '>',
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: "New Submission: " + (data.formType || 'Contact Form'),
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 });
  }
}

