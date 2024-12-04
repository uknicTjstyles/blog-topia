import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type:String, required:true, unique:true},
    userName: String,
    password: {type:String, required:true},
    otp: String,
    otpExpiration: Date,
    role:{ type: String, enum: ["user", "admin"], default: "user" },
    isVerified: {type:Boolean, default: false},
    profilePic: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
})
export default mongoose.models.User || mongoose.model("User", userSchema)