import Post from "../model/post-schema.js"
import mongoose from "mongoose";
export const deleteChat = async (request,response) => {
   
    try{
        
        const postId = Object.keys(request.body)[0];
        const deletedPost = await Post.findOneAndDelete({ id: postId});
        if (!deletedPost) {
            return response.status(404).json({ error: 'Post not found' });
        }
        response.json({ message: 'Post deleted successfully', deletedPost });
        
        
    }catch(error){
        response.status(500).json({ message: error.message });
        //500:internal server error
    }
}
export const deleteComment = async (request,response) => {
   
    try{
        
        const postId = Object.keys(request.body)[0];
        const commentIndex = Object.keys(request.body)[1];
        const post = await Post.findOne({ id: postId});

        if (!post) {
        return response.status(404).json({ error: 'Post not found' });
        }

        // Remove the comment at the specified index
        post.commenttext.splice(commentIndex, 1);

        // Save the updated post
        await post.save();

        response.json({ message: 'Comment deleted successfully' });
        
        
    }catch(error){
        response.status(500).json({ message: error.message });
        //500:internal server error
    }
}