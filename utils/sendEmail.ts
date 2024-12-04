import nodemailer from 'nodemailer';
import { mongoDbConfig } from '@/lib/mongoDb/config';

export default async function sentOTPEmail(email: string,subject:string, text: string) {
    try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          service: "gmail",
          auth: {
            user: mongoDbConfig.senderEmail,
            pass: mongoDbConfig.senderEmailPassword,
          },
        });
      const mailOptions = {
        from: mongoDbConfig.senderEmail,
        to: email,
        subject,
        text,
      };
      await transporter.sendMail(mailOptions);
      console.log("OTP sent Successfully");
    } catch (error) {
      console.error("Error sending OTP:", error);
      throw new Error("Failed to send OTP");
    }
  }


