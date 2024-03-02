import React,{ useEffect } from 'react';
import {Box} from '@mui/material';
import styled from '@emotion/styled';

import Leftbar from "../../Component/LeftPostContainer/Leftbar";
import MainPost from "../../Component/MainPostContainer/MainPost";
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

import { getPosts } from '../../redux/actions/postActions';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL= 'http://localhost:8000';

const HomeStyled = styled(Box)`
    background: #1D2125;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
`;

const Component = styled(Box)`
    margin: 10px 40px 0px 40px;
    margin-top: 65px;
    display: flex;
    justify-content: space-between;
`;

const Home = ({userData}) => {

    const getPost = useSelector(state => state.getPosts)
    const {posts} = getPost;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    
    
    return (
        <HomeStyled>
            <Navbar/>
            <Component>
                <Leftbar />
                <MainPost posts={posts} userData={userData} />
            </Component>
            <Footer />
        </HomeStyled>
    )
}

export default Home;