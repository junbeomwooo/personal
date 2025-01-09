import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {email, subject, message } = await req.json();

    console.log(email);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // email
        pass: process.env.EMAIL_PASS, // pw
      },
    });

    // options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // reciver email
      replyTo: email,     
      subject: subject,
      text: message,
    };

    // send
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully!" });

  } catch(error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
        { success: false, message: "Failed to send email." },
        { status: 500 }
      );
  }
}
