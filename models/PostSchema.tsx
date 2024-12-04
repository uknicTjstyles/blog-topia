import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {type:String, required: true},
    content: {type:String, required:true},
    authorId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    blogImage: {type:String, required:true},
    comments: [
        {
          userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          text: { type: String, required: true },
          createdAt: { type: Date, default: Date.now },
        },
      ],
}, {timestamps: true})

export default mongoose.models.Post || mongoose.model("Post", postSchema)