import { NextResponse } from 'next/server';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import connectDB from '@/lib/moongoose';
import User from '@/models/UserSchema';
// import bcrypt from 'bcryptjs';
import sendOtpEmail from '@/utils/sendEmail';
import {generateOtp,} from '@/utils/otp';
import connectDb from '@/lib/moongoose';
import { hashPassword } from '@/utils/hashedPassword';
// import { generateToken } from '@/utils/jwt';



export async function POST(req:Request) {

    try {
        const {name,email, password} = await req.json();

        // connecting to database
       await connectDb();


       const existingUser = await User.findOne({ email });
       if (existingUser) {
        return NextResponse.json(
          { error: 'User already exists' },
          { status: 400 }
        );
      }




        // hashing of password
        const hashedPassword = await hashPassword(password);

        // Generation of otp
        const otp = generateOtp();
        



        const otpExpiration = new Date();
        otpExpiration.setMinutes(otpExpiration.getMinutes() + 1);

        const newUser = {
            name,
            email,
            password:hashedPassword,
            otp, 
            otpExpiration
        }

        const user = await User.create(newUser);




        sendOtpEmail(email,'Activation Code from BlogTopia', `Your BlogTopia Verification code is ${otp}`);





        // const temporaryToken = generateToken(
        //   { id: user._id }, // Payload with user ID
        //   '10m' // Token expiration time (optional, adjust as needed)
        // );

        return NextResponse.json(
          {
            message: 'User registered successfully',
            user: { id: user._id, email: user.email },
          },
          { status: 201 }
        );

    } catch (error) {
        console.error(error);
      return NextResponse.json(
        { error: 'Error registering user' },
        { status: 500 }
      );
    }

  // else {
  //   return res.status(405).json({ error: 'Method Not Allowed' });
  // }



}