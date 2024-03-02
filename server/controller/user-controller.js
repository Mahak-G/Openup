import { createRequire } from 'node:module';
import User from "../model/user-schema.js";
import Post from "../model/post-schema.js"
import jwt from 'jsonwebtoken';

export const userSignup = async (request,response) =>{
    let getUser;
    //backend api
    try{
        const exist = await User.findOne({phone: request.body.phone})
        if(exist){
            return response.status(401).json({message: 'username already exist'});
        }
        const user=request.body;
        const newuser= new User(user);
        await newuser.save();
        getUser = newuser;
            let jwtToken = jwt.sign(
                {
                    phone: getUser.phone
                },
                //Signign the token with the JWT_SECRET in the .env
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d"
                }
            );
        return response.status(200).json({accessToken: jwtToken,user: newuser});
    }  catch(error)
    {
        response.status(500).json({message: error.message});
    }
}

export const userLogin = async (request,response) => {
    //backend api
    let getUser;
    try{
        const user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            getUser = user;
            let jwtToken = jwt.sign(
                {
                    phone: getUser.phone
                },
                //Signign the token with the JWT_SECRET in the .env
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d"
                }
            );
            return response.status(200).json({accessToken: jwtToken,user: user});
        } else {
            return response.status(401).json('Invalid Login');
        }
    }catch(error){
        response.json('Error: ', error.message);  
        //500:internal server error
    }
}
export const userSignupUpdate = async (request,response) =>{

    //backend api
    try {
        const updatedUser = await User.findOne({ username: request.body.pusername });
        
        if (!updatedUser) {
            return response.status(401).json('Invalid Signup Update: User not found');
        } 
        updatedUser.username = request.body.username;
        updatedUser.password = request.body.password;
        updatedUser.color = request.body.color;
        updatedUser.birthdate = request.body.birthdate;
        updatedUser.securityAnswer = request.body.securityAnswer;
        await updatedUser.save();
        const oldUsername = request.body.pusername;
        const newUsername = request.body.username;
        await Post.updateMany({ username: oldUsername }, { username: newUsername });
        await Post.updateMany(
            { 'commenttext.$[outerElem].$[innerElem]': oldUsername },
            { $set: { 'commenttext.$[outerElem].$[innerElem]': newUsername } },
            { arrayFilters: [{ 'outerElem.$[].username': oldUsername }, { 'innerElem': oldUsername }] }
        );        
        return response.status(200).json({user: updatedUser});
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
export const userPasswordUpdate = async (request, response) => {
    try {
        // Find user by phone number
        const updatedUser = await User.findOne({ phone: request.body.phone });
        
        if (!updatedUser) {
            return response.status(401).json('Invalid password Update: User not found');
        } 
        
        // Check if security answer matches
        if (updatedUser.securityAnswer !== request.body.securityAnswer) {
            return response.status(401).json('Invalid password Update: Incorrect security answer');
        }
        
        // Update user details
        updatedUser.password = request.body.password;
        
        // Save updated user
        await updatedUser.save();     
        
        return response.status(200).json({ user: updatedUser });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
