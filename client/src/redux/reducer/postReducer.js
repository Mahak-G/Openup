import * as actionTypes from '../constants/postConstants';
const initialState = {
    posts: [],
    error: null,
  };

export const getPostsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_POSTS_SUCCESS:
            return { ...state,
                posts: action.payload,
                error: null, };
        case actionTypes.GET_POSTS_FAIL:
            return { error: action.payload }
        
        default:
            return state
    }
};