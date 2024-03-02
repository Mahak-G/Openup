import Post from "../model/post-schema.js"
import Notification from "../model/notify-schema.js";
export const enterLike = async (request,response) => {
    //backend api: callback function
    try{
        
        const postId = Object.keys(request.body)[0];
        const post = await Post.updateOne(
            { id: postId },
            { $inc: { like: 1} }
         );
         const postusername= await Post.findOne({id: postId});
        const notif=await Notification.findOneAndUpdate(
            { username: postusername.username},
            { $inc: { like: 1} },
            { new: true, upsert: true }
        );
        if(notif) {
            console.log("notification updated");
        }
        else{
            console.log("notification not updated");
        }
        if(post) {
            return response.status(200).json(post);
        } else {
            response.status(200).json({ mesage: data });
        }
    }catch(error){
        response.status(500).json({ message: error.message });
        //500:internal server error
    }
}