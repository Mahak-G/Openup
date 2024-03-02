import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import profileimage from '../../Pages/Profile/profileimage.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DeleteIcon from '@mui/icons-material/Delete';

import { Component, useState,useEffect } from "react";
import { getPosts } from '../../redux/actions/postActions';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteComment } from "../../services/api";
import { addLike } from "../../services/api";

const  PostContainer = styled(Box)`
    width: 30%;
    margin-top: 20px;
    margin-left: 30px;
    background-color: #161A1D;
    color: white;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubPostContainer = styled(Box)`
    width: 94%;
    background-color: #161A1D;
    color: white;
    margin: 20px 20px 10px 20px;
    border-radius: 10px;
`;

const PostComponent = styled(Box)`
    display: flex;
    flex-direction: column;
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

const ProfileReplyBar = ({userData}) => {
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
    const deletecomment = async(t) =>{
        if(window.confirm('Are you sure want to delete this comment?')){
            let response = await deleteComment(t);//api call
            if(!response) return;
            dispatch(getPosts());
        }
    }
    
    const enterLike = async(t) => {
        
        if (userData.username.trim() === '') {
            // Handle the case where the username is empty
            alert('Please login first');
            return;
          }
        else{
            let response = await addLike(t);//api call
            if(!response) return;
        }
    };

    return (
        <PostContainer>
            <SubPostContainer>
                <Typography style={{textAlign: "center", fontSize: "20px"}}>Reply</Typography>
                {posts && posts.map(post => (
                    // Assuming userData.username is the username to filter by
                    post.commenttext && post.commenttext.map((comment, index) => {
                        // Assuming userData.username is the username to filter by
                        if (comment[0] === userData.username) {
                            return (
                                <PostComponent key={comment[0] + index}>
                                    <TextContainer>
                                        <UserText>
                                            {comment[1]}
                                        </UserText>
                                        <IconButton onClick={() => { deletecomment(post.id, index)}}>
                                            <DeleteIcon style={{color: 'white'}}/>
                                        </IconButton>
                                    </TextContainer>
                                    <Wrapper>
                                        
                                        <IconButton onClick={() => { postdetail(post.id)}} >
                                            <QuestionAnswerIcon style={{color: "grey", textAlign: "start", margin: '5px'}} />
                                        </IconButton>
                                    </Wrapper>
                                    <hr style={{width: '90%'}}/>
                                </PostComponent>
                            );
                        }
                        return null;
                    })
                ))}
            </SubPostContainer>
        </PostContainer>
    );
}

export default ProfileReplyBar;