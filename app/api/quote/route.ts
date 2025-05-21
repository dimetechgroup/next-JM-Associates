import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const { Email, Fullname, Message, Phone, Company } = await request.json();

    // Validate required fields
    if (!Email || !Fullname || !Message || !Phone || !Company) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return NextResponse.json({ error: "Invalid Email address" }, { status: 400 });
    }

    // Configure the mail transport
    const transport = nodemailer.createTransport({
      host: "jmassociates.co.ke",
      port: 465,
      secure: true,
      auth: {
        user: "client-service@jmassociates.co.ke",
        pass: "p+?JV.Xe@hmd",
      },
    });

    // Prepare the email options
    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: "info@jmassociates.co.ke",
      subject: `Website Quote Form with ${Company} as the subject`,
      text: `FullName: ${Fullname}\nEmail: ${Email}\nPhone: ${Phone}\nMessage: ${Message}`,
    };

    // Send the email
    await transport.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent", status: "success" }, { status: 200 });

  } catch (err: any) {
    console.error("Email sending failed:", err);
    return NextResponse.json({ message: "Email not sent", status: "error", error: err.message }, { status: 500 });
  }
}
