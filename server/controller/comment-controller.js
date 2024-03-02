import Post from "../model/post-schema.js"
import Notification from "../model/notify-schema.js";
export const enterComment = async (request,response) => {
    //backend api: callback function
    try{
        const post = await Post.findOne({ id: request.body.id });

        if (post) {
        // Assuming request.body.username and request.body.commenttext have the required values
            const newComment = [request.body.username, request.body.text];

            // Add the new comment to the existing commenttext array
            post.commenttext = post.commenttext || ['',''];
            post.commenttext.push(newComment);
                        // Save the updated post document
            await post.save();
            
            const notif=await Notification.findOneAndUpdate(
                { username: post.username},
                { $inc: { comment: 1} },
                { new: true, upsert: true }
            );
            if(notif) {
                console.log("notification updated");
            }
            else{
                console.log("notification not updated");
            }
            response.status(201).send('The comment has been added!');
            
        } else {
            response.status(200).json({ mesage: data });
        }
    }catch(error){
        response.status(500).json({ message: error.message });
        //500:internal server error
    }
}