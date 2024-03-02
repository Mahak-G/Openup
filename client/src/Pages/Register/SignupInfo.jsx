import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import { Link } from "react-router-dom";
import {useState,useContext,useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
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

const SignupInfoContainer = styled(Box)`
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

const UsernameContainer = styled(Box)`
    background-color: #161A1D;
    color: white;
    width: 40%;
    margin-left: 30%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DropdownContainer = styled(Box)`
    background-color: #161A1D;
    color: white;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const RandomButton = styled(Box)`
    display: flex;
    background: #728FCE;
    color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 5px;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #4169E1;
    }
`;

const SetColorContainer = styled(Box)`
    background-color: #161A1D;
    color: white;
    width: 40%;
    margin-left: 30%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const ColorContainer = styled(Box)`
    margin: auto;
`;

const SetDateContainer = styled(Box)`
    display: flex;
    margin-left: 30%;
    width: 40%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #161A1D;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
`;

const DateContainer = styled(Box)`
    margin: 5px;
    text-align: center;
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

const BtnForSignup = styled(Box)`
    margin-left: 5px;
    margin-right: 5px;
    color: white;
    background: #161A1D;
    border: solid 2px grey;
    border-radius: 10px;
    padding: 3px;
    cursor: pointer;
    width: 100%;
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
    birthdate: '',
    securityAnswer: ''
}

export default function SignupInfo({onLogin}) {
    const location = useLocation();
    const [phone, setPhone] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');

    useEffect(() => {
        if (location.state) {
            const { phone, securityAnswer } = location.state;
            setPhone(phone);
            setSecurityAnswer(securityAnswer);
        }
    }, [location.state]);
    const [selected1, setSelected1] = useState("Choose One");
    const [selected2, setSelected2] = useState("Choose One");
    const [selected3, setSelected3] = useState("Choose One");

    const [color, setColor] = useState();

    const options1 = ["dog", "cow", "cat", "horse",
    "donkey", "tiger", "lion", "panther",
    "leopard", "cheetah", "bear", "elephant", "turtle", "tortoise", "crocodile",
    "rabbit", "porcupine", "hare", "hen",
    "pigeon", "albatross", "crow", "fish",
    "dolphin", "frog", "whale", "alligator",
    "eagle", "squirrel", "ostrich", "fox",
    "goat", "jackal", "emu", "armadillo",
    "eel", "goose", "wolf",
    "beagle", "gorilla", "chimpanzee", "monkey",
    "beaver", "orangutan", "antelope", "bat",
    "badger", "giraffe", "crab", "giant panda",
    "hamster", "cobra", "shark", "camel",
    "hawk", "deer", "chameleon", "hippopotamus",
    "jaguar", "chihuahua", "ibex",
    "lizard", "koala", "kangaroo", "iguana",
    "llama", "chinchillas", "dodo", "jellyfish",
    "rhinoceros", "hedgehog", "zebra", "possum",
    "wombat", "bison", "bull", "buffalo",
    "sheep", "meerkat", "mouse", "otter",
    "sloth", "owl", "vulture", "flamingo",
    "racoon", "mole", "duck", "swan",
    "lynx", "elk", "boar",
    "lemur", "mule", "baboon", "mammoth", "rat", "snake", "peacock"];

    const options2 = ["dawn", "shiny", "shy", "ending", "bubbly", "beauty", "potion", "lived", "revelation", "forever", "heavenly", "happiness", "joy", "luxury", "happiness", "peaceful", "glowing", "flammable", "crush", "maze", "lake", "flexible", "affection", "song", "glow", "poetic", "sadness", "melodic", "amazing", "evil", "enemy", "wealth", "calm", "scenic", "abundance", "nearness", "essence", "colorful", "rebirth", "wave", "spark", "tree", "luck", "hissing", "outline", "resonant", "luxurious", "secretive", "alignment", "peacefulness", "parasol", "travel", "means", "peak", "light", "vivid", "bashful", "conclusion", "energetic", "grace", "pleasure", "delight", "cheerful", "serene", "radiant", "fiery", "emotion", "amusement", "contentment", "tranquil", "gleaming", "fiery", "passion", "enmity", "prosperity", "serene", "profusion", "closeness", "spirit", "colorful", "renewal", "undulation", "glint", "branch", "fortune", "quietude", "shade", "journey", "way", "zenith"]

    const options3 = ["admirable", "adorable", "alluring", "angelic", "appealing",
    "beauteous", "bewitching", "captivating", "charming", "classy",
    "comely", "cute", "dazzling", "delicate", "delightful",
    "divine", "elegant", "enthralling", "enticing", "excellent",
    "exquisite", "fair", "fascinating", "fetching", "fine",
    "foxy", "good", "gorgeous", "graceful", "grand",
    "handsome", "ideal", "inviting", "lovely", "magnetic",
    "magnificent", "marvelous", "mesmeric", "nice", "pleasing",
    "pretty", "pulchritudinous", "radiant", "ravishing", "refined",
    "resplendent", "shapely", "slightly", "splendid", "statuesque",
    "stunning", "sublime", "superb", "symmetrical", "taking",
    "tantalizing", "teasing", "tempting", "winning",
    "wonderful"];    
    
    const getOption = () => {
        setSelected1(options3[Math.floor(Math.random() * options3.length)]);
        setSelected2(options2[Math.floor(Math.random() * options2.length)]);
        setSelected3(options1[Math.floor(Math.random() * options1.length)]);
        
    }
    const [colorp, setColorp] = useState('#ffffff');

    const handleColorChange = (newColor) => {
        setColorp(newColor.hex);
        setColor(newColor.hex); 
        console.log(color);
    };

    const [date, setDate] = useState();

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const {account,setAccount} = useContext(Datacontext);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);

    useEffect(() => {
        showError(false);
    }, [signup])

    const onValueChange = (e) => {
        //fetching values from event e that is passed by textfields
        // console.log(e);
        signup.username=selected1+selected2+selected3;
        signup.birthdate=date;
        signup.color=color;
        signup.phone=phone;
        signup.securityAnswer=securityAnswer;
        // if([e.target.name]=="username")
        //     e.target.value+=selected1+selected2+selected3;
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }
    const [details,setDetails] = useState(signupInitialValues);
    const navigate = useNavigate();
    const signupuser = async () =>{
        //call for api
        if (!signup.username || !signup.password || !signup.phone || !signup.color || !signup.birthdate) {
            // Show error message or perform other actions
            alert('Please fill in all fields');
            return; // Exit the function early if any field is empty
        }
          else{
        let response = await authenticateSignup(signup);
        if(!response) 
            showError(true);
        else{
            setAccount(signup.username);
            details.color=response.data.user.color;
            details.birthdate=response.data.user.birthdate;
            details.password=response.data.user.password;
            details.phone=response.data.user.phone;
            details.username=response.data.user.username;
            details.securityAnswer=response.data.user.username;
            onLogin(details);
            localStorage.setItem('authToken', response.data.accessToken);
            localStorage.setItem('user', JSON.stringify(details));
            navigate('/');
        }
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
                <SignupInfoContainer>
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '-70px', marginLeft: '30%', color: 'white'}}>Account Details</Typography>
                    <TextFieldContainer>
                        <TextField placeholder="Set Password" onChange={(e) => onValueChange(e)} name='password' type="password" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }}/>
                    </TextFieldContainer>
                    <UsernameContainer>
                        <Typography style={{fontSize: '17px', margin: '5px 0px 5px 10px', color: '#bdbdbd'}}>Set Username</Typography>
                        <DropdownContainer>
                            <Dropdown1 selected1={selected1} setSelected1={setSelected1} />
                            <Dropdown2 selected2={selected2} setSelected2={setSelected2} />
                            <Dropdown3 selected3={selected3} setSelected3={setSelected3} />
                            <RandomButton variant="contained" onClick={() => getOption()}>
                                <ChangeCircle style={{fontSize: '30px', margin: 'auto'}}/>
                            </RandomButton>
                        </DropdownContainer>
                    </UsernameContainer>
                    <SetColorContainer>
                        <Typography style={{fontSize: '17px', margin: '5px 0px 5px 10px', color: '#bdbdbd'}}>Set Color</Typography>
                        <ColorContainer>
                            {/* {colors.map((curColor, index) => {
                                return <button key={index} style={{backgroundColor: curColor, padding: '12px', border: 'none', borderRadius: '50%', margin: '2px'}} onClick={() => setColor(curColor)}>{color===curColor ? <FaCheck style={{color: "white", fontSize: '1rem'}}/> : null}</button>
                            })} */}
                            <HuePicker color={color} onChange={handleColorChange} />
                        </ColorContainer>
                    </SetColorContainer>
                    <SetDateContainer>
                        <Typography style={{fontSize: '16px', margin: '5px 10px 5px 10px', color: '#bdbdbd'}}>Set Date of Birth</Typography>
                        <DateContainer>
                            <input type="date" style={{fontSize: '15px'}} onChange={e => setDate(e.target.value)} />
                        </DateContainer>
                    </SetDateContainer>
                    <BtnContainer>
                        <BtnForSignup onClick={() => signupuser()}>Signup</BtnForSignup>
                    </BtnContainer>
                </SignupInfoContainer>
            </SubMainContainer>
        </MainContainerForSignup>
    )
}