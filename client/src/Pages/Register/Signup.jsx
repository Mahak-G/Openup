import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button,MenuItem} from '@mui/material';
import { Link } from "react-router-dom";
import {useState,useContext,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { ChangeCircle } from "@mui/icons-material";
import { HuePicker } from 'react-color';

import Dropdown1 from '../../Component/Dropdown/Dropdown1';
import Dropdown2 from '../../Component/Dropdown/Dropdown2';
import Dropdown3 from '../../Component/Dropdown/Dropdown3';

// call apis
import { authenticateSignup } from "../../services/api";
import {Datacontext} from "../../context/DataProvider";

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

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: white;
    text-decoration: none;
`;

const BtnContainer = styled(Box)`
    margin-left: 17%;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 41%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const BtnForSignup = styled(Box)`
    
    
    color: white;
    background: #161A1D;
    border: solid 2px grey;
    border-radius: 10px;
    padding: 3px;
    cursor: pointer;
    width: 30%;
    text-align: center;
    &:hover {
        background: grey;
        border: solid 2px black;
        color: black;
    }
`;

const signupInitialValues = {
    phone: '',
    password: '',
    username: '',
    color: '',
    birthdate: ''

}

export default function Signup() {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    // const {account,setAccount} = useContext(Datacontext);
    // const [ signup, setSignup ] = useState(signupInitialValues);
    // const [ error, showError] = useState(false);

    // useEffect(() => {
    //     showError(false);
    // }, [signup])

    // const onValueChange = (e) => {
    //     //fetching values from event e that is passed by textfields
    //     // console.log(e);
    //     signup.username=selected1+selected2+selected3;
    //     signup.birthdate=date;
    //     signup.color=color;
    //     // if([e.target.name]=="username")
    //     //     e.target.value+=selected1+selected2+selected3;
    //     setSignup({ ...signup, [e.target.name]: e.target.value });
    //     // console.log(signup);
    // }
    // const [details,setDetails] = useState(signupInitialValues);
    // const navigate = useNavigate();
    // const signupuser = async ({onLogin}) =>{
    //     //call for api
    //     if (signup.username.trim() === '' || signup.password.trim() === ''||signup.phone.trim() === ''||signup.color.trim() === ''||signup.birthdate.trim() === '') {
    //         // Show error message or perform other actions
    //         alert('Please fill in all fields');
    //         navigate('/signup')
    //       }
    //       else{
    //     let response = await authenticateSignup(signup);
    //     if(!response) 
    //         showError(true);
    //     else{
    //         setAccount(signup.username);
    //         details.color=response.data.user.color;
    //         details.birthdate=response.data.user.birthdate;
    //         details.password=response.data.user.password;
    //         details.phone=response.data.user.phone;
    //         details.username=response.data.user.username;
    //         onLogin(details);
    //         localStorage.setItem('authToken', response.data.accessToken);
    //         localStorage.setItem('user', JSON.stringify(details));
    //         navigate('/');
    //     }
    // }
    // }
    const navigate = useNavigate();
    const signupInfo = async () =>{
        if (phone.trim() === '' || securityAnswer.trim() === '') {
            // Show error message or perform other actions
            alert('Please fill in all fields');
            navigate('/signup')
          }
          else{
            navigate('/signupinfo', { state: { phone, securityAnswer } });
          }
        
    }
    const [securityAnswer, setSecurityAnswer] = useState('');

    const handleSecurityAnswerChange = (event) => {
        setSecurityAnswer(event.target.value);
        
    };
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (event) => {
        
        setPhone(event.target.value);
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
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '-70px', marginLeft: '30%', color: 'white'}}>Create New Account</Typography>
                    <TextFieldContainer>{/* onChange={(e) => onValueChange(e)} */}
                        <TextField placeholder="Enter Your Phone Number" name='phone' type="number" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }} onChange={(e) => handlePhoneChange(e)}/>
                    </TextFieldContainer>
                     {/* Security Question Dropdown */}
                    <TextFieldContainer>
                    <Typography style={{fontSize: '16px', textAlign: 'start', marginTop: '5px', marginLeft: '3%', color: 'white'}}>What is your favorite food?</Typography>
                    </TextFieldContainer>
                    <TextFieldContainer>{/* onChange={(e) => onValueChange(e)} */}
                        <TextField placeholder="Enter security answer" name="securityAnswer" type="text" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }} onChange={(e) => handleSecurityAnswerChange(e)}/>
                    </TextFieldContainer>
                    <BtnContainer>
                        <BtnForSignup onClick={() => signupInfo()}>Next</BtnForSignup>
                    </BtnContainer>
                    <Link to={"/login"}>
                        <Typography style={{textAlign: 'start', marginLeft: '30.6%', color: 'white', textDecoration: 'underline'}}>Already have a account</Typography>
                    </Link>
                </SignupInfo>
            </SubMainContainer>
        </MainContainerForSignup>
    )
}