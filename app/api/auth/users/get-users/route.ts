import { NextResponse } from 'next/server';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import connectDB from '@/lib/moongoose';
import User from '@/models/UserSchema';
import connectDb from '@/lib/moongoose';

export async function GET(req:Request){
    await connectDb();

    if (req.method === "GET") {
        try {
          // Fetch all users and exclude the password field
          const users = await User.find().select("-password");
          return NextResponse.json({users}, {status: 200});
        } catch (error) {
          console.error("Error fetching users:", error);
          NextResponse.json({ message: "Failed to fetch users" }, {status: 500});
        }
      } else {
        NextResponse.json({ message: "Method Not Allowed" }, {status: 405});
      }

}