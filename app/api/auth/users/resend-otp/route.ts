import { NextResponse } from "next/server";
import  {generateOtp} from "@/utils/otp";
import connectDb from "@/lib/moongoose";
import User from "@/models/UserSchema";
import  sendOtpEmail  from "@/utils/sendEmail"; // Create a utility for sending OTP emails

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { email } = await req.json(); // Get email from request body

      await connectDb(); // Ensure database connection

      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      // Check if the previous OTP is still valid
      const currentTime = Date.now();

      // Check if OTP was recently sent (within 60 seconds)
      if (user.otpExpiration && user.otpExpiration > currentTime) {
        const secondsRemaining = Math.ceil(
          (user.otpExpiration - currentTime) / 1000
        );
        return NextResponse.json(
          { error: `Please wait ${secondsRemaining}s before requesting another OTP.` },
          { status: 429 }
        );
      }

      // Generate a new OTP and set the expiration (5 minutes validity)
      const newOtp = generateOtp();
      const otpExpiration = currentTime + 1 * 60 * 1000; // 5 minutes expiry time

      // Update OTP and OTP expiration in the database
      user.otp = newOtp;
      user.otpExpiration = otpExpiration;
      await user.save();

      // Send the new OTP via email (you need to implement this function)
      sendOtpEmail(user.email, newOtp, `Your BlogTopia Verification code is ${newOtp}`);

      return NextResponse.json(
        { message: "OTP sent successfully. Please check your email." },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error during OTP resend:", error);
      return NextResponse.json({ error: "Error resending OTP" }, { status: 500 });
    }
  } else {
    // Handle non-POST requests (e.g., GET)
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
}
