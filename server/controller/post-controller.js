import Post from "../model/post-schema.js"
//const router = require("express").Router();

export const getPosts = async (request,response) =>{
    try{
        const posts= await Post.find({});
        response.status(200).json(posts);
    }
    catch(error){
        response.status(200).json({message: error.message});   
    }
}

    
