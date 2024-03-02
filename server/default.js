import { posts } from "./constants/data.js"
import Post from "./model/post-schema.js";

const DefaultData = async() => {
    try{

        // await Post.deleteMany({});
        // await Post.insertMany(posts);
        console.log('adding data successfully');
    }catch(error){
        console.log('error while adding data',error.message);
    }
}

export default DefaultData;