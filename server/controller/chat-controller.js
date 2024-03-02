import Post from "../model/post-schema.js"
import {v4} from 'uuid';

export const enterChat = async (request,response) => {
    //backend api: callback function
    try{
        request.body.id=v4();
        const data = request.body;
        const newChat = new Post(data);
        await newChat.save();

        response.status(200).json({ newChat });
    }catch(error){
        response.status(500).json({ message: error.message });
        //500:internal server error
    }
}

