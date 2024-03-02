import   { useContext} from 'react';
import {Box, Typography} from '@mui/material';
import styled from '@emotion/styled';
import ProfileColor from './ProfileColor';
import { useNavigate } from 'react-router-dom';

const InfoContainer = styled(Box)`
    width: 30%;
    height: 25vh;
    margin-top: 20px;
    margin-left: 30px;
    background-color: #161A1D;
    color: white;
    border-radius:20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const DetailsContainer = styled(Box)`
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: row;
    color: white;
`;

const EditBtn = styled(Box)`  
    margin-left: 30%;
    margin-top: 5px;
    margin-bottom: 2.5px;
    background: #1D2125;
    border: 2px solid white;
    border-radius: 10px;
    padding: 3px;
    cursor: pointer;
    width: 41%;
    text-align: center;
`;

const LogOutBtn = styled(Box)`  
    margin-left: 30%;
    margin-top: 2.5px;
    margin-bottom: 10px;
    background: #1D2125;
    border: 2px solid white;
    border-radius: 10px;
    padding: 3px;
    cursor: pointer;
    width: 41%;
    text-align: center;
`;

const ProfileInfoBar = ({userData}) => {
    const navigate = useNavigate();
    const editProfile = ()=>{
        navigate('/editprofile');
    }
    const logout = () => {
        
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        navigate('/login');
    }
    return (
        <InfoContainer>
            <DetailsContainer>
                <ProfileColor curcolor={userData.color} />
                <Typography style={{fontSize: '20px', margin: '27px 0px 0px 15px'}}>{userData.username}</Typography>
            </DetailsContainer>
            <EditBtn onClick={() => { editProfile() }}>Edit Profile</EditBtn>
            <LogOutBtn onClick={() => { logout()}}>Logout</LogOutBtn>
        </InfoContainer>
    )
}

export default ProfileInfoBar;