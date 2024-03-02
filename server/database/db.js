import mongoose from "mongoose";


export const connection = async (URL) => {
       try{
        await mongoose.connect(URL,{useunifiedTopology:true , useNewUrlParser:true});
        console.log('database connected successfully');
    } 
    catch(error){
        console.log('error while connecting',error.message);
    }
}

export default connection;