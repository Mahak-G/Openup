import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import profileimage from '../../Pages/Profile/profileimage.png';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorImage from "./ColorImage";

//api
import { addChat } from "../../services/api";
import { getPosts } from '../../redux/actions/postActions';
import { useDispatch,useSelector } from 'react-redux';

const ContentUploadContainer = styled(Box)`
    width: 94%;
    height: 20vh;
    margin: 20px 20px 10px 20px;
    border-radius: 10px;
    background: #161A1D;
    color: white;
`;

const Content = styled(Box)`
    display: flex;
    align-items: center;
    margin: 10px;
    color: white;
`;

const TextFieldContainer = styled(Box)`
    width: 100%;
    margin: 0 20px;
    color: white;
`;

const StyledButton = styled(Button)`
    display: flex;
    background: #728FCE;
    color: #fff;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    align-items: center;
    &:hover {
        background: #4169E1;
    }
`;

const chatInitialValues = {
    id: '',
    username: '',
    color: '',
    posttext: '',
    like: '0',
    commenttext:
    [
        ['', ''],
      ],
};

export default function ContentPost({userData}) {
    const navigate = useNavigate();
    const [ newChat, setChat ] = useState(chatInitialValues);
    const [textFieldContent, setTextFieldContent] = useState('');
    const [initialTextField, setInitialTextField] = useState('What\'s on your mind');
    const onInputChange = (e) => {
        // if (userData && userData.color && userData.color.trim() === '') {
        //     setChat({ ...newChat, [e.target.name]: e.target.value });
        //     setTextFieldContent(e.target.value);
        // }
        // else{
        //     newChat.color=userData.color;
        //     newChat.username=userData.username;
        //     setChat({ ...newChat, [e.target.name]: e.target.value });
        //     setTextFieldContent(e.target.value);
        // }
        if (userData && userData.color && userData.color.trim() === '') {
            setChat((newChat) => ({
                ...newChat,
                [e.target.name]: e.target.value,
            }));
            setTextFieldContent(e.target.value);
        } else {
            setChat((newChat) => ({
                ...newChat,
                color: userData.color,
                username: userData.username,
                [e.target.name]: e.target.value,
            }));
            setTextFieldContent(e.target.value);
        }
    }
    const dispatch = useDispatch();
    const enterChat = async() => {
        if (!userData || !userData.username || !userData.username.trim() === '' ) {
            // Handle the case where the username is empty
            alert('Please login first');
            return;
          }
        
        else{
            if(newChat.posttext==='')
            {
                return;
            }
            let response = await addChat(newChat);//api call
            console.log(response.data);
            const data = response.data;
            
            dispatch(getPosts());
            if(!response) return;
        }
        newChat.posttext='';
        setTextFieldContent('');
        setInitialTextField('What"s on your mind');
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent form submission or other default behavior
          // Handle the Enter key press here
        }
      };

    return (
        <ContentUploadContainer>
            <Content>
                <ColorImage curcolor={userData.color}  />                
                <TextFieldContainer>
                    <TextField fullWidth id="outlined-textarea" value={textFieldContent} onChange={(e) => onInputChange(e)} name='posttext' placeholder={initialTextField} onKeyDown={handleKeyDown} size="small" multiline maxRows={5} sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white'}}}/>
                </TextFieldContainer>
                <StyledButton variant="contained" onClick={() => enterChat()}>Post</StyledButton>
            </Content>
        </ContentUploadContainer>
    )
}