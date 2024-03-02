import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Menu, MenuItem, Box, styled } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const LoginButton = styled(Button)(({ theme }) => ({
    color: 'white',
    marginLeft: '5',
    marginRight: '5px !important',
    textTransform: 'none',
    fontWeight: '600',
    borderRadius: '2',
    padding: '5px 40px',
    width: '12.5rem',
    height: '32',
    fontSize: '20',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: 'black',
        color: 'white'
    }
}));

const ProfileButton = ({ account,setAccount}) => {
    const [open, setOpen] = useState(false);
    
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        setAccount('');
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        navigate('/login');
    }
    
    const navigate = useNavigate();
    const profiles = ()=>{
        navigate('/profile');
    }


    return (
        <>
            <LoginButton onClick={handleClick}><Typography style={{ marginTop: 2 }}>{account}</Typography></LoginButton>
            <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose} MenuListProps={{style: {width: '12.5rem', background: 'black', color: 'white'}}}>
                <MenuItem onClick={() => { profiles()}} >
                    <AccountCircleIcon />
                    <Logout>Profile</Logout>    
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); logout();}} >
                    <LogoutIcon />
                    <Logout>Logout</Logout>
                </MenuItem>
            </Menu>
        </>
    )    
}

export default ProfileButton;