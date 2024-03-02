import axios from 'axios';
const URL= 'http://localhost:8000';

export const addLike = async (user) => {
    try {
        return await axios.post(`${URL}/posts-like`, user)
    } catch (error) {
        console.log('Error while calling like API: ', error);
        return error.response;
    }
}
export const addChat = async (user) => {
    try {
        return await axios.post(`${URL}/posts-chat`, user)
    } catch (error) {
        console.log('Error while calling posts chat API: ', error);
        return error.response;
    }
}
export const addComment = async (user) => {
    try {
        return await axios.post(`${URL}/posts-comment`, user)
    } catch (error) {
        console.log('Error while calling posts comment API: ', error);
        return error.response;
    }
}
export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${URL}/signup`, user)
    } catch (error) {
        console.log('Error while calling like API: ', error);
        return error.response;
    }
}
export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}
export const deletePost = async (user) => {
    try {
        return await axios.post(`${URL}/delete-chat`, user)
    } catch (error) {
        console.log('Error while deleting post chat API: ', error);
        return error.response;
    }
}
export const deleteComment = async (user) => {
    try {
        return await axios.post(`${URL}/delete-comment`, user)
    } catch (error) {
        console.log('Error while deleting post chat API: ', error);
        return error.response;
    }
}
export const authenticateSignupUpdate = async (user) => {
    try {
        return await axios.post(`${URL}/signupupdate`, user)
    } catch (error) {
        console.log('Error while calling like API: ', error);
        return error.response;
    }
}
export const authenticatePasswordUpdate = async (user) => {
    try {
        return await axios.post(`${URL}/passwordupdate`, user)
    } catch (error) {
        console.log('Error while calling like API: ', error);
        return error.response;
    }
}