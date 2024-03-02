import styled from '@emotion/styled';
import {Box, Typography} from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import Quote from '../../Quote.png';
import iCall from '../../iCall.png';
import HealthCollective from '../../HealthCollective.png';
import qw from '../../qw.png';
import qe from  '../../qe.png';

const MainContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    background: #1D2125;
    min-height: 100vh;
`;

const SubContainer = styled(Box)`
  display: float;
  margin-top: 65px;
`;

const AboutSection = styled(Box)`
  float: left;
  width: 80%;
  height: 250px;
  background: #161A1D;
  color: white;
  margin: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
`;

const SupportSection = styled(Box)`
  float: right;
  width: 80%;
  height: 250px;
  background: #161A1D;
  color: white;
  margin: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
`;

const OwnerInfo = styled(Box)`
  float: left;
  width: 80%;
  height: 250px;
  background: #161A1D;
  color: white;
  margin: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

// Define your main component that brings together all the sections
function AboutUs() {
  return (
    <MainContainer>
      <Navbar />
      <SubContainer>
        <AboutSection>
          <img src={qw} alt="" style={{borderRadius: '20px'}}/>
          <TextContainer>
            <h1 class="sub-title">Thought That Started It</h1>
            <p class="sb-title">
            In our fast-paced world, mental health is crucial, yet often neglected.
            When life becomes overwhelming, when solitude weighs heavy, or when reaching out to friends and family feels daunting, there arises a profound need for a safe space—a platform where individuals can unburden their hearts without fear of judgment or stigma. It's with this vision in mind that we proudly introduce Open Up, our web app, offers a safe, anonymous space for sharing struggles. Open Up is more than a platform; it's a promise of empathy and healing.
Here, users can unburden their hearts without fear of judgment or stigma. Join us on Open Up, where every share is a step toward healing.</p>
          </TextContainer>
        </AboutSection>
        <SupportSection>
          <a href='https://icallhelpline.org/' target="_blank" rel="noopener noreferrer"><img src={iCall} alt="" style={{borderRadius: '20px', height: '100%'}} /></a>
          <TextContainer>
            <h1 class="sub-title">24/7 Support</h1>
            <p class="sb-title">In times of crisis, reaching out for support can be daunting, but you're never alone. Helplines like iCall provide confidential, compassionate assistance, offering a lifeline when you need it most. 24/7 Indian helplines are designed to address a wide range of issues from immediate crisis needs and crisis follow-ups to non-emergency emotional support, informational guidance and coping resources. Don't hesitate to reach out your well-being matters, and help is just a call away.</p>
          </TextContainer>
          <a href="http://healthcollective.in/contact/helplines/" target="_blank" rel="noopener noreferrer"><img src={HealthCollective} alt="" style={{borderRadius: '20px', height: '100%'}}/></a>
        </SupportSection>
        <OwnerInfo>
          <img src={qe} alt="" style={{borderRadius: '20px'}}/>
          <TextContainer>
            <h1 class="sub-title">Team Behind It</h1>
            <p class="sb-title">Meet the driving force behind Open Up:</p>
            <p>Mahak Gupta
              <br/>
            Prachi Samuel</p>
          </TextContainer>
        </OwnerInfo>
      </SubContainer>
    </MainContainer>
  );
}

export default AboutUs;
