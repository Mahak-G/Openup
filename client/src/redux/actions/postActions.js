import axios from 'axios';
import * as actionTypes from '../constants/postConstants';


const URL= 'http://localhost:8000';



export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await axios.get(`${URL}/posts`);
        dispatch({ type: actionTypes.GET_POSTS_SUCCESS, payload: data });
    }catch(error){
        dispatch({ type: actionTypes.GET_POSTS_FAIL, payload: error.response });
    }
}


