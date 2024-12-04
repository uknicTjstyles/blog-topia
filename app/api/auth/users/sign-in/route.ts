// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
// import connectDB from '@/lib/moongoose';
import User from '@/models/UserSchema';
import { verifyPassword } from '@/utils/hashedPassword';
import connectDb from '@/lib/moongoose';
import { generateToken } from '../../../../../utils/jwt';
import { generateOtp } from '@/utils/otp';
import sendOtpEmail from '@/utils/sendEmail';




export async function POST(req:Request){
if(req.method === "POST"){
        const {email, password} = await req.json();
        await connectDb();
    const user = await User.findOne({email});

    if(!email || !password){
        return NextResponse.json({ error: 'Email and password are required' }, {status: 400});
    }


    if(!user){
        return NextResponse.json({error: 'User does not exist'}, {status: 404})
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, {status: 401});
    }

    if (!user.isVerified) {
      const currentTime = Date.now();

      // Check if OTP was recently sent (within 60 seconds)
      if (user.otpExpiration && user.otpExpiration > currentTime) {
        // const secondsRemaining = Math.ceil(
        //   (user.otpExpiration - currentTime) / 1000
        // ); 
        return NextResponse.json(
          {
            error: `Account not verified`,
            redirectUrl: "/verify-account",
          },
          { status: 403 }
        );
      }

      // Generate a new OTP and update expiration (5 minutes validity)
      const newOtp = generateOtp();
      user.otp = newOtp;
      user.otpExpiration = currentTime + 1 * 60 * 1000; // 5 minutes expiry time
      await user.save();

      // Send the OTP via email
      await sendOtpEmail(
        user.email,
        newOtp,
        `Your BlogTopia Verification Code is ${newOtp}`
      );

      return NextResponse.json(
        {
          error: "Account not verified. A new OTP has been sent to your email.",
          redirectUrl: "/verify-account",
        },
        { status: 403 }
      );
    }


    const token = await generateToken({ id: user._id, email: user.email, }, '3h');

    // jwt.sign(
    //     ,
    //     process.env.JWT_SECRET as string, // Make sure to set this in your environment variables
    //     { expiresIn: '1h' }
    //   );

      // Send success response with token
      return NextResponse.json({
        message: 'Login successful',
        token, // Return the JWT token for client-side usage
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          isVerified: user.isVerified,
          role: user.role
        },
      }, {status: 200});


}else {
    // Handle non-POST requests (e.g., GET)
    return NextResponse.json({ error: 'Method Not Allowed' }, {status: 405});
  }



}


