import { NextResponse } from "next/server";
import connectDb from "@/lib/moongoose";
import User from "@/models/UserSchema";
import Post from "@/models/PostSchema"


export async function DELETE(req:Request){
    if(req.method==="DELETE"){
        try {
            const {searchParams} = new URL(req.url);
            const userId = searchParams.get('id');

            await connectDb();

            if (!userId) {
                return NextResponse.json(
                  { error: "User ID is required" },
                  { status: 400 }
                );
              }
          
           const user =  await User.findById(userId);


           if (!user) {
            return NextResponse.json(
              { error: "User not found" },
              { status: 404 }
            );
          }

          await Post.deleteMany({authorId: userId})


          await User.deleteOne();

          return NextResponse.json(
            { message: "User and all associated posts deleted successfully." },
            { status: 200 }
          );




        } catch (error) {
                console.error(error);
            return NextResponse.json(
      { error: "An error occurred while deleting the user." },
      { status: 500 }
            );
        }

    } else{
        return NextResponse.json({error:"Method not allowed"}, {status: 405})
    }






}