import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
      id: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
    },
    color: String,
    posttext: String,
    like: Number,
    commenttext: [
        [
          { type: String }
        ]
      ]
});

const Post = mongoose.model('post',postSchema);

export default Post;