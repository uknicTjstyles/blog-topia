import { NextResponse } from 'next/server';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import connectDB from '@/lib/moongoose';
import User from '@/models/UserSchema';
import connectDb from '@/lib/moongoose';

export async function GET(req:Request){
 try {
    const url = new URL(req.url);  // URL object is available on the Request
    const query = url.searchParams;
    const id = query.get('id');  // Get the 'id' parameter, or null if not provided

    // If 'id' is not provided, return an error
    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }
    // Connect to the database
    await connectDb();

        // Fetch the user by id, excluding the password field
        const user = await User.findById(id).select("-password");

        if (!user) {
          return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
          );
        }
    
        // Return the found user
        return NextResponse.json({ user }, { status: 200 });


 } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { message: "Failed to fetch user" },
      { status: 500 }
    );
 }
}