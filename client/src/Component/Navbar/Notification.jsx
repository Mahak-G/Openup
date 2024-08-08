import { useRef, useState,useEffect } from 'react';
import { Button, Box, styled, Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import Button from '@material-ui/core/Button';
import axios from 'axios';
const NotificationBar = styled(Box)`
    display: flex;
    flex-direction: column;
`;

const NotifiButton = styled(Button)`
    // display: flex;
    // flex-direction: column;
`;

const NotifiContainer = styled(Box)`
    width: 30em;
    height: 20vh;
    background-color: black;
    color: white;
    border-radius:20px;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    margin-top: 45px;
    margin-right: 130px;
`;

const NotifiContent = styled(Box)`
    width: 90%;
    height: 10vh;
    background-color: black;
    color: white;
    margin: 10px;
    font-size:16px;
`;
const values={
    username:'',
    like:0,
    comment:0
};
const Notification = ({account}) => {
    const [notificationData, setNotificationData] = useState(values);
    const URL= 'https://openup.onrender.com';
    
    const username=account;
    const fetchN = async () => {
        try {
            const response = await axios.get(`${URL}/getnotify/${username}`);
            setNotificationData(response.data);
            console.log('Notification data:', response.data);
        } catch (error) {
            console.error('Error fetching notification data:', error);
        }
    }

    useEffect(() => {
        
        fetchN();
    }, [username]);
    const [isActive, setIsActive] = useState(false);
    
    const dropRef = useRef();
    const menuRef = useRef();
    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== dropRef.current) {
            setIsActive(false);
        }
    });
   const count = (notificationData.comment || 0) + (notificationData.like || 0);;
    const navigate = useNavigate();
    const handleIconClick = (event) => {
        event.stopPropagation();
        setIsActive(!isActive);
        if (!isActive) {
            deleteAllNotifications(username);
            navigate('/');
        }
    };
    
    const deleteAllNotifications = async (username) => {
        try {
            const response = await axios.post(`${URL}/deletenotifications/${username}`);
            if (response.status !== 204) {
                throw new Error('Failed to delete notifications');
            }
            fetchN();
            console.log('Notifications deleted successfully');
            
        } catch (error) {
            console.error('Error deleting notifications:', error);
        }
    };
    const [notifications, setNotifications] = useState([]);
    return (
        <NotificationBar>
            <NotifiButton ref={dropRef} onClick={(e) => setIsActive(!isActive)}>
                <Badge badgeContent={count} color='primary' onClick={handleIconClick}>
                    <NotificationsIcon style={{color: "white"}} onClick={handleIconClick}/>
                </Badge>
            </NotifiButton>
            {isActive && ( 
                <NotifiContainer ref={menuRef}>
                    {/* {notifications.map((notification) => ( */}
                        <NotifiContent onClick={(e) => setIsActive(false) }>
                            {/* {notification} */}
                            {notificationData.comment} new comments!<br></br>
                            {notificationData.like} new likes!
                        </NotifiContent>
                        <hr style={{width: '90%'}}/>
                    {/* ))} */}
                </NotifiContainer>
            )}
        </NotificationBar>
    )    
}

export default Notification;
