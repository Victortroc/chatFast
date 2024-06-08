import mongoose, { Schema, Document } from "mongoose";

interface IPost extends Document {
    userId: mongoose.Types.ObjectId;
    content: string;
    mediaUrls: string[];
    createdAt: Date;
}

const PostSchema: Schema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    mediaUrls: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IPost>("Post", PostSchema);
