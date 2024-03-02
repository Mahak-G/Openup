import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import profileimage from '../../Pages/Profile/profileimage.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Component, useState,useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

import { getPosts } from '../../redux/actions/postActions';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost } from "../../services/api";

const PostContainer = styled(Box)`
    width: 60%;
    margin-top: 20px;
    margin-left: 30px;
    background-color: #161A1D;
    color: white;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`;

const SubPostContainer = styled(Box)`
    width: 94%;
    background-color: #161A1D;
    color: white;
    margin: 20px 20px 10px 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const PostComponent = styled(Box)`
    
`;

const TextContainer = styled(Box)`
    display: flex;
    flex-direction: row;
`;

const UserText = styled(Typography)`  
    text-align: start;
    width: 96%;
    margin: 10px;
    margin-left: 20px; 
    color: white;
`;

const Wrapper = styled(Box)`  
    text-align: start;
    margin-left: 10px;
`;



const ProfilePostBar = ({ userData }) => {
    const getPost = useSelector(state => state.getPosts);
    const { posts } = getPost;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const navigate = useNavigate();
    const postdetail = (t)=>{
        navigate(`/postdetail/${t}`);
    }
    const deletepost = async(t) =>{
        if(window.confirm('Are you sure want to delete this post?')){
            let response = await deletePost(t);//api call
            if(!response) return;
            dispatch(getPosts());
        }
    }
    
    return (
        <PostContainer>
            <SubPostContainer>
                <Typography style={{textAlign: "center", fontSize: "20px"}}>Post</Typography>
                {posts && posts.map(post => {
                    // Assuming userData.username is the username to filter by
                    if (post.username === userData.username) {
                        return (
                            <PostComponent key={post._id}>
                                <TextContainer>
                                    <UserText>
                                        {post.posttext}
                                    </UserText>
                                    <IconButton onClick={() => { deletepost(post.id)}}>
                                        <DeleteIcon style={{color: 'white'}}/>
                                    </IconButton>
                                </TextContainer>
                                <Wrapper>
                                    <IconButton>
                                        <FavoriteIcon style={{ color: "pink", textAlign: "start", margin: '5px' }} />
                                        <Typography style={{ marginLeft: "5px", color: "white"}}>{post.like}</Typography>
                                    </IconButton>
                                    <IconButton onClick={() => { postdetail(post.id)}} >
                                        <QuestionAnswerIcon style={{color: "grey", textAlign: "start", margin: '5px'}} />
                                    </IconButton>
                                </Wrapper>
                                <hr />
                            </PostComponent>
                        );
                    }
                    return null; // If post does not match the condition, return null
                })}
            </SubPostContainer>
        </PostContainer>
    );
}

export default ProfilePostBar;
