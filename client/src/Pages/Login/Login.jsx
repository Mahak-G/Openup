import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import { Link } from "react-router-dom";
import {useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
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

const BtnForLogin = styled(Box)`
    margin-left: 30%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 3px;
    cursor: pointer;
    width: 41%;
    text-align: center;
`;
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: white;
    text-decoration: none;
`;
const loginInitialValues = {
    username: '',
    password: ''
};
const InitialValues = {
    birthdate: '',
    color: '',
    password: '',
    phone: '',
    username: ''
};
export default function Login({onLogin}) {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ error, showError] = useState(false);
    const {account,setAccount} = useContext(Datacontext);
    const [details,setDetails] = useState(InitialValues);
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
    
    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
        {
            alert('Wrong Information');
            showError(true);
        }
        else {
            showError(false);
            setAccount(login.username);
            details.color=response.data.user.color;
            details.birthdate=response.data.user.birthdate;
            details.password=response.data.user.password;
            details.phone=response.data.user.phone;
            details.username=response.data.user.username;
            onLogin(details);
            
            // Store the authentication token in local storage
            localStorage.setItem('authToken', response.data.accessToken);
            localStorage.setItem('user', JSON.stringify(details));
            navigate('/');
        }
    }
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
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '10px', marginLeft: '30%', color: 'white'}}>Login Account</Typography>
                    <TextFieldContainer>
                        <TextField placeholder="Enter username" onChange={(e) => onValueChange(e)} name="username" type="text" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }}/>
                    </TextFieldContainer>
                    <TextFieldContainer>
                        <TextField placeholder="Enter password" onChange={(e) => onValueChange(e)} name="password" type="password" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }}/>
                    </TextFieldContainer>
                    <BtnForLogin style={{backgroundColor: isHover ? 'grey' : '#161A1D', border: isHover ? 'solid 2px black' : 'solid 2px grey', color: isHover ? 'black' : 'white'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => loginUser()}>Login</BtnForLogin>
                    <Link to={"/forgetpassword"}>
                        <Typography style={{textAlign: 'start', marginLeft: '30.6%', marginTop: '5px', color: 'white', textDecoration: 'underline'}}>Forget password</Typography>
                    </Link>
                    <Link to={"/signup"} >
                        <Typography style={{textAlign: 'start', marginLeft: '30.6%', marginTop: '5px', color: 'white', textDecoration: 'underline'}}>Create new account</Typography>
                    </Link>
                    
                </SignupInfo>
            </SubMainContainer>
        </MainContainerForSignup>
    )
}