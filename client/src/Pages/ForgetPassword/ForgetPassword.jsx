import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import { Link } from "react-router-dom";
import {useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticatePasswordUpdate } from "../../services/api";
import axios from "axios";
//api
import {Datacontext} from "../../context/DataProvider";
import { authenticateLogin } from "../../services/api";

const MainContainerForSignup = styled(Box)`
    background-color: #1D2125;
    height: 100vh;
`;

const SubMainContainer = styled(Box)`
    display: flex;
    align-items: center;
    padding-top: 100px;
`;

const AppInfo = styled(Box)`
    flex: 1;
    margin-left: 150px;
    margin-bottom: 170px;
    color: white;
`;

const SignupInfo = styled(Box)`
    flex: 3;
`;

const TextFieldContainer = styled(Box)`
    display: flex;
    margin-left: 30%;
    width: 40%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #161A1D;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const BtnContainer = styled(Box)`
    margin-left: 30%;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 41%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const BtnForLogin = styled(Box)`
    margin-left: 5px;
    margin-right: 5px;
    color: white;
    background: #161A1D;
    border: solid 2px grey;
    border-radius: 10px;
    padding: 3px;
    cursor: pointer;
    width: 60%;
    text-align: center;
    &:hover {
        background: grey;
        border: solid 2px black;
        color: black;
    }
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: white;
    text-decoration: none;
`;


const InitialValues = {
    
    password: '',
    phone: '',
    securityAnswer: ''
};

export default function ForgetPassword() {

    const navigate = useNavigate();
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [signup, setSignup] = useState(InitialValues);
    const handleSecurityAnswerChange = (event) => {
        setSecurityAnswer(event.target.value);
        
    };
    const [ error, showError] = useState(false);
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (event) => {
        
        setPhone(event.target.value);
    };
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event) => {
        
        setPassword(event.target.value);
    };
    const updatePassword = async () =>{
        if (phone.trim() === '' || securityAnswer.trim() === ''||password.trim() === '') {
            // Show error message or perform other actions
            alert('Please fill in all fields');
            navigate('/forgetpassword');
          }
          else{
            try{
                signup.password=password;
                signup.phone=phone;
                signup.securityAnswer=securityAnswer;
                let response = await authenticatePasswordUpdate(signup);
                if (!response || response.status === 401) {
                    showError(true);
                    alert('Incorrect security answer. Please try again.');
                    navigate('/forgetpassword');
                } else {
                    navigate('/login');
                }
            }catch (error) {
                console.error('Error updating password:', error);
                // Handle any error that occurs during the password update process
            }
            
          }
    };
    return (
        <MainContainerForSignup>
            <SubMainContainer>
                <AppInfo>
                    <Component to='/'>
                        <Typography style={{fontSize: '40px', alignItems: 'center', paddingTop: '200px', paddingBottom: '35px', marginLeft: '30px'}}>OpenUp</Typography>
                    </Component>
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '-40px'}}>Connect with each other</Typography>
                </AppInfo>
                <SignupInfo>
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '10px', marginLeft: '30%', color: 'white'}}>Forget Password</Typography>
                    <TextFieldContainer>
                        <TextField placeholder="Enter Number" onChange={(e) => handlePhoneChange(e)} name="phone" type="text" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }}/>
                    </TextFieldContainer>
                    <TextFieldContainer>
                    <Typography style={{fontSize: '16px', textAlign: 'start', marginTop: '5px', marginLeft: '3%', color: 'white'}}>What is your favorite food?</Typography>
                    </TextFieldContainer>
                    <TextFieldContainer>{/* onChange={(e) => onValueChange(e)} */}
                        <TextField placeholder="Enter security answer" name="securityAnswer" type="text" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }} onChange={(e) => handleSecurityAnswerChange(e)}/>
                    </TextFieldContainer>
                    <TextFieldContainer>
                        <TextField placeholder="Enter New Password"  name="password" type="password" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }}onChange={(e) => handlePasswordChange(e)}/>
                    </TextFieldContainer>
                    <BtnContainer>
                        <BtnForLogin onClick={() => updatePassword()}>Save</BtnForLogin>
                    </BtnContainer>
                    <Link to={"/login"}>
                        <Typography style={{textAlign: 'start', marginLeft: '30.6%', marginTop: '5px', color: 'white', textDecoration: 'underline'}}>Login to Account</Typography>
                    </Link>
                </SignupInfo>
            </SubMainContainer>
        </MainContainerForSignup>
    )
}