import styled from "@emotion/styled";
import { Box } from "@mui/material";
import qs from "../../qs.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const LeftStyled = styled(Box)`
    width: 30%;
    height: 60vh;
    margin-top: 20px;
    margin-left: 30px;
    background-color: #161A1D;
    color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Container = styled(Box)`
    margin: 10px;
    background: transparent;
    border-radius: 20px;
    &:hover {
        cursor: pointer;
    }
`;

const Leftbar = () => {
    
    return (
        <LeftStyled>
            <Container>
                <Link to={`aboutus`} style={{textDecoration: 'none'}}><img src={qs} alt="" style={{width: '100%', height: '100%', borderRadius: '20px'}}/>
                </Link>
            </Container>
        </LeftStyled>
    );
};

export default Leftbar;
