import   { useState,useContext,useEffect} from 'react';
import { Box,Button,Typography,styled } from "@mui/material";
import { useNavigate } from 'react-router-dom';

//components
import ProfileButton from './ProfileButton';
import { Datacontext } from '../../context/DataProvider';
import Notification from './Notification';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    height: 32,
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: 'black',
            alignItems: 'center',
            display:'flex',   
            flexDirection: 'column',
            marginTop: 10,
            fontSize: 12,
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: 'white',
    marginLeft: 5,
    marginRight: '5px !important',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    fontSize: 20,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: 'white',
        color: 'black'
    }
}));



const CustomButton = () =>{
    const navigate = useNavigate();
    const toLogin = () => {
        navigate('/login');
    }
    const toProfile = () => {
        navigate('/profile');
    }

    const {account,setAccount} = useContext(Datacontext);
    
    useEffect(() => {
        // Retrieve user information from localStorage on page load
        const storedUser = localStorage.getItem('user');
        try {
            if (storedUser) {
              // Check if storedUser is not undefined before parsing
              const parsedUser = JSON.parse(storedUser);
              if (parsedUser && typeof parsedUser === 'object') {
                // Ensure parsedUser is an object
                setAccount(parsedUser.username);
              } else {
                console.error('Invalid user data in localStorage:', parsedUser);
              }
            }
          } catch (error) {
            console.error('Error parsing user data:', error);
          }
        }, [setAccount]);
    
    
    return (
        <Wrapper>
            {
                account ?  <ProfileButton account={account} setAccount={setAccount}/>:
                    <LoginButton onClick={() => toLogin()}> Login</LoginButton> 
            }
            <Notification account={account}/>
        </Wrapper>
    )
}

export default CustomButton;