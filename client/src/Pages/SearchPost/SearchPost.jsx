import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import profileimage from '../../Pages/Profile/profileimage.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
// import ColorImage from "./ColorImage";
import { Component, useState } from "react";
import { addLike } from "../../services/api";
import { useNavigate } from 'react-router-dom';

import Navbar from "../../Component/Navbar/Navbar";

const PostContainer = styled(Box)`
    background: #1D2125;
    width: 100vw;
    display:flex;
    justify-content: center;
`;

const SubPostContainer = styled(Box)`
    width: 60%;
    background-color: #161A1D;
    color: white;
    margin: 80px 20px 20px 20px;
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

export default function SearchPost({posts}) {

    const enterLike = async(t) => {
        
        let response = await addLike(t);//api call
        if(!response) return;
    };

    const navigate = useNavigate();
    const postdetail = (t)=>{
        navigate(`/postdetail/${t}`);
    }

    return (
        <PostContainer>
            <Navbar />
            <SubPostContainer>
                {
                    posts && posts.map(posts => (
                    <PostComponent >
                        <UserInfo>
                            {/* <ColorImage curcolor={posts.color} /> */}
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
                                <Typography style={{marginLeft: "5px"}}>{posts.like}</Typography>
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