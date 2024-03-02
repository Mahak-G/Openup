import {Box} from '@mui/material';
import styled from '@emotion/styled';

import Navbar from '../../Component/Navbar/Navbar';
import ProfileInfoBar from '../../Component/ProfileInfoContainer/ProfileInfoBar';
import ProfilePostBar from '../../Component/ProfilePostContainer/ProfilePostBar';
import ProfileReplyBar from '../../Component/ProfileReplyContainer/ProfileReplyBar';
import Footer from '../../Component/Footer/Footer';

const ProfileContainer = styled(Box)`
    background: #1D2125;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
`;

const SubProfileContainer = styled(Box)`
    margin: 10px 40px 0px 40px;
    margin-top: 65px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Profile = ({userData}) => {
    return (
        <ProfileContainer>
            <Navbar/>
            <SubProfileContainer>
                <ProfileInfoBar userData={userData}/>
                <ProfilePostBar userData={userData}/>
                <ProfileReplyBar userData={userData}/>
            </SubProfileContainer>
            <Footer />
        </ProfileContainer>
    )
}

export default Profile;