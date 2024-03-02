import styled from '@emotion/styled';
import {AppBar,Box,Toolbar, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from '../../logo.png';

//components
import Search from './Search';
import CustomButton from './CustomButton';

const StyledNavbar = styled(AppBar)`
    background: black;
    height: 65px;
    margin-bottom: 20px;
`;

const LogoContainer = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const BackButton = styled(Button)`
    display: flex;
    color: #fff;
    border-radius: 10px;
    width: 10px;
    height: 30px;
    align-items: center;
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <Toolbar>
                <BackButton>
                    <ArrowBackIcon onClick={()=>window.history.back()} />
                </BackButton>
                <LogoContainer to='/'>
                    <img src={logo} alt="logo" style={{width: 160}} />
                </LogoContainer>
                <Search />
                <CustomButton />
            </Toolbar>
        </StyledNavbar>
    )
}

export default Navbar;