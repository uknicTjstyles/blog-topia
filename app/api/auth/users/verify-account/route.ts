// import type { NextApiRequest, NextApiResponse } from 'next';
import {NextResponse} from 'next/server'
import {verifyOtpCode} from '@/utils/otp';
import connectDb from '@/lib/moongoose';
import User from '@/models/UserSchema';
import { generateToken} from '@/utils/jwt';

interface VerifyOtpRequestBody {
  otp: string;
  email: string;
  }

  export async function POST(req:Request) {
if(req.method === "POST"){
    try {
      const { otp, email }: VerifyOtpRequestBody = await req.json();

    
      await connectDb();


      const user = await User.findOne({email});


      


      if(!user) {
        return NextResponse.json({error: 'User not found'}, { status: 404});

      }
      
      const {success} = verifyOtpCode(otp, user.otp, user.otpExpiration)

        if(success){
            user.isVerified = true;
            user.otp = null;
            user.otpExpiration = null



            await user.save();

                // Generate a JWT token
        const token = generateToken({ id: user._id, email: user.email }, '3h');

        return NextResponse.json({
          message: 'Account activated successfully',
          token, // Send token after verification
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
          },
        }, {status: 200});
        }




    } catch (error) {
        console.error('Error during OTP verification:', error);
        return NextResponse.json({ error: 'Error verifying OTP' }, {status: 500});
    }

}else {
  // Handle non-POST requests (e.g., GET)
  return NextResponse.json({ error: 'Method Not Allowed' }, {status: 405});
}






}