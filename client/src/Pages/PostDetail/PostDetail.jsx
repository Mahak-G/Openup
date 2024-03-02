import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import profileimage from '../../Pages/Profile/profileimage.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SendIcon from '@mui/icons-material/Send';
import ColorImage from "../../Component/PostContainer/ColorImage";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

import { addLike } from "../../services/api";
import { useParams } from 'react-router-dom';
import { getPosts } from '../../redux/actions/postActions';
import { useDispatch,useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addComment } from "../../services/api";

const PostContainer = styled(Box)`
    background: #1D2125;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

const SubPostContainer = styled(Box)`
    width: 60%;
    background-color: #161A1D;
    color: white;
    margin: 80px 20px 20px 20px;
    border-radius: 10px;
`;

const PostComponent = styled(Box)`
    // display: flex;
    // flex-direction: row;
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

const CommentContainer = styled(Box)`  
    display: flex;
    flex-direction: column;
`;

const TextFieldContainer = styled(Box)`
    display: flex;
    flex-direction: row;
`;

const CommentSection = styled(Box)`  
    margin: 10px;
`;

const CommentComponent = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const chatInitialValues = {
    id: '',
    username: '',
    text: '',
};

export default function PostDetail({userData}) {
    const { id } = useParams();
    
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
    const [ newChat, setChat ] = useState(chatInitialValues);
    const [textFieldContent, setTextFieldContent] = useState('');
    const [initialTextField, setInitialTextField] = useState('Write your comment');
    const onInputChange = (e) => {
        if (userData && userData.color && userData.color.trim() === '') {
            setChat((newChat) => ({
                ...newChat,
                [e.target.name]: e.target.value,
            }));
            setTextFieldContent(e.target.value);
        } else {
            setChat((newChat) => ({
                ...newChat,
                id: id,
                username: userData.username,
                [e.target.name]: e.target.value,
            }));  
            setTextFieldContent(e.target.value);
        }
    }
    
    const enterChat = async() => {
        
        if (userData.username.trim() === '') {
            // Handle the case where the username is empty
            alert('Please login first');
            return;
          }
        else{
            if(newChat.text==='')
            {
                return;
            }
            let response = await addComment(newChat);//api call
            dispatch(getPosts());
            if(!response) return;
        }
        newChat.text='';
        setTextFieldContent('');
        setInitialTextField('Write your comment');
        
    }
    return (
        <PostContainer>
            <Navbar />
            <SubPostContainer>
                {
                    posts && posts.map(post => {
                        
                        if (post.id === id) {
                            return (
                            <PostComponent>
                                <UserInfo>
                                    <ColorImage curcolor={post.color} />
                                    <Username>
                                        {post.username} 
                                    </Username>
                                </UserInfo>
                                <UserText>
                                    {post.posttext}
                                </UserText>
                                <Wrapper> 
                                    <IconButton   onClick={() =>  enterLike(post.id)}>
                                        <FavoriteIcon style={{color: "pink", textAlign: "start", margin: '5px'}} />
                                        <Typography style={{marginLeft: "5px", color: "white"}}>{post.like}</Typography> 
                                    </IconButton>
                                    <IconButton>
                                        <QuestionAnswerIcon style={{color: "grey", textAlign: "start", margin: '5px'}} />
                                    </IconButton>  
                                </Wrapper>
                                <hr/>
                                <CommentContainer>
                                    <Typography style={{margin: '10px'}}>Comments</Typography>
                                    <TextFieldContainer>
                                        <TextField fullWidth id="outlined-textarea" value={textFieldContent} onChange={(e) => onInputChange(e)} name='text' placeholder={initialTextField} size="small" multiline maxRows={5} InputProps={{ style: { color: 'white' } }}/>
                                        <Button>
                                            <SendIcon onClick={() => enterChat()}/>
                                        </Button>
                                    </TextFieldContainer>
                                    <CommentSection>
                                        {post.commenttext &&
                                        post.commenttext.map((comment) => {
                                        return (
                                            <CommentComponent key={comment[0]}>
                                                
                                                <Username>{comment[0]}</Username>
                                                <UserText>{comment[1]}</UserText>
                                                
                                            </CommentComponent>
                                            );
                                        })}
                                    </CommentSection>
                                </CommentContainer>
                            </PostComponent>
                    );
                }
                return null; // If post does not match the condition, return null
            })}
            </SubPostContainer>
            <Footer />
        </PostContainer>
    )
}