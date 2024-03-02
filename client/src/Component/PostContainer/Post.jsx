import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import profileimage from '../../Pages/Profile/profileimage.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ColorImage from "./ColorImage";

import { Component, useState ,useEffect} from "react";
import { addLike } from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../redux/actions/postActions';
import { useDispatch,useSelector } from 'react-redux';

const PostContainer = styled(Box)`
    width: 94%;
    background-color: #161A1D;
    color: white;
    margin: 20px 20px 10px 20px;
    border-radius: 10px;
`;

const SubPostContainer = styled(Box)`
    width: 94%;
    background-color: #161A1D;
    color: white;
    margin: 20px 20px 10px 20px;
    border-radius: 10px;
`;

const PostComponent = styled(Box)`
    // cursor: pointer;
`;

const UserInfo = styled(Box)`  
    display: flex;
    align-items: center;
    margin-top: 5px;
`;

const UserText = styled(Typography)`  
    text-align: start;
    width: 96%;
    margin: 10px;
    margin-left: 20px; 
    color: white;
`;

const Username = styled(Typography)`  
    margin-left: 10px;
    font-size: 20px;
    color: white;
`;

const Wrapper = styled(Box)`  
    text-align: start;
    margin-left: 10px;
`;

export default function Post({userData}) {
    const getPost = useSelector(state => state.getPosts);
    const { posts } = getPost;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    
    const enterLike = async(t) => {
        
        if (userData.username.trim() === '') {
            // Handle the case where the username is empty
            alert('Please login first');
            return;
          }
        else{
            let response = await addLike(t);//api call
            dispatch(getPosts());
            if(!response) return;
        }
    };

    const navigate = useNavigate();
    const postdetail = (t)=>{
        navigate(`/postdetail/${t}`);
    }

    return (
        <PostContainer>
            <SubPostContainer>
                
                {
                    posts && posts.map(posts => (
                    <PostComponent >
                        <UserInfo>
                            <ColorImage curcolor={posts.color} />
                            <Username>
                                {posts.username} 
                            </Username>
                        </UserInfo>
                        <UserText>
                            {posts.posttext}
                        </UserText>
                        <Wrapper>
                            <IconButton onClick={() =>  enterLike(posts.id)}>
                                <FavoriteIcon style={{color: "pink", textAlign: "start", margin: '5px'}} />
                                <Typography style={{marginLeft: "5px", color: "white"}}>{posts.like}</Typography>
                            </IconButton>
                            <IconButton onClick={() => { postdetail(posts.id)}} >
                                <QuestionAnswerIcon style={{color: "grey", textAlign: "start", margin: '5px'}} />
                            </IconButton>  
                        </Wrapper>
                        <hr/>
                    </PostComponent>

                    ))
                } 
            </SubPostContainer>
        </PostContainer>
    )
}