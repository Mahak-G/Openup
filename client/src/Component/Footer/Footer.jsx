import styled from '@emotion/styled';
import {Box, Typography} from '@mui/material';
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const FooterContainer = styled(Box)`
  background: black;
  color: white;
  width: 100%;
  height: 60px;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const Footer = () => {

  const navigate = useNavigate(); 

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate('/aboutus'); 
    }, 0); 
  };

  return (
    <FooterContainer>
        <LinkContainer>
            <Link onClick={handleClick} style={{color: 'white', textDecoration: 'none', margin: '2px'}}>About Us</Link>
            <Link to={"/contactus"} style={{color: 'white', textDecoration: 'none', margin: '2px'}}>Contact Us</Link>
        </LinkContainer>
        <TextContainer>
          <hr style={{width: '0px', height: '50px', background: 'white', margin: '5px'}}/>
          <Typography style={{margin: '5px'}}>Copyright &copy; 2024</Typography>
        </TextContainer>
    </FooterContainer>
  );
};

export default Footer;
