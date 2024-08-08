import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import {useState,useContext,useEffect} from 'react';
import { FaCheck } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Navbar from '../../Component/Navbar/Navbar';
import { ChangeCircle } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { HuePicker } from 'react-color';

import Dropdown1 from '../../Component/Dropdown/Dropdown1';
import Dropdown2 from '../../Component/Dropdown/Dropdown2';
import Dropdown3 from '../../Component/Dropdown/Dropdown3';

import { authenticateSignupUpdate } from "../../services/api";
import {Datacontext} from "../../context/DataProvider";
const MainContainer = styled(Box)`
    background: #1D2125;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EditProfileContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 40%;
    border-radius:20px;
    justify-content: center;
`;

const UsernameContainer = styled(Box)`
    background: #161A1D;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const DropdownContainer = styled(Box)`
    margin: 10px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #161A1D;
    color: white;
`;

const SetColorContainer = styled(Box)`
    background: #161A1D;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ColorContainer = styled(Box)`
    margin: 5px;
`;

const SetDateContainer = styled(Box)`
    display: flex;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: #161A1D;
    color: white;
    margin-top: 5px;
    margin-bottom: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const DateContainer = styled(Box)`
    margin: 5px;
    text-align: center;
`;

const TextFieldContainer = styled(Box)`
    display: flex;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: #161A1D;
    color: white;
    margin-top: 5px;
    margin-bottom: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

const SaveButton = styled(Button)`
    display: flex;
    background: #728FCE;
    color: #fff;
    width: 40px;
    height: 40px;
    margin: 5px;
    margin-left: 45%;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #4169E1;
    }
`;
const signupInitialValues = {
    password: '',
    username: '',
    color: '',
    birthdate: '',
    pusername: '',
    securityAnswer:''
}
const InitialValues = {
    birthdate: '',
    color: '',
    password: '',
    phone: '',
    username: '',
    securityAnswer:''
};
const EditProfile = ({userData,onLogin}) => {
    const [selected1, setSelected1] = useState("Choose One");
    const [selected2, setSelected2] = useState("Choose One");
    const [selected3, setSelected3] = useState("Choose One");

    const colors = ["red", "blue", "green", "yellow"];
    const [color, setColor] = useState();

    const [date, setDate] = useState('');
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    useEffect(() => {
        showError(false);
    }, [signup])

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

    const options2 = ["dawn", "shiny", "shy", "ending", "bubbly", "beauty", "potion", "lived", "revelation", "forever", "heavenly", "happiness", "joy", "luxury", "happiness", "peaceful", "glowing", "flammable", "crush", "maze", "lake", "flexible", "affection", "song", "glow", "poetic", "sadness", "melodic", "amazing", "evil", "enemy", "wealth", "calm", "scenic", "abundance", "nearness", "essence", "colorful", "rebirth", "wave", "spark", "tree", "luck", "hissing", "outline", "resonant", "luxurious", "secretive", "alignment", "peacefulness", "parasol", "travel", "means", "peak", "light", "vivid", "bashful", "conclusion", "energetic", "grace", "pleasure", "delight", "cheerful", "serene", "radiant", "fiery", "emotion", "amusement", "contentment", "tranquil", "gleaming", "fiery", "passion", "enmity", "prosperity", "serene", "profusion", "closeness", "spirit", "colorful", "renewal", "undulation", "glint", "branch", "fortune", "quietude", "shade", "journey", "way", "zenith"];

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

    const {account,setAccount} = useContext(Datacontext);
    const getOption = () => {
        setSelected1(options3[Math.floor(Math.random() * options3.length)]);
        setSelected2(options2[Math.floor(Math.random() * options2.length)]);
        setSelected3(options1[Math.floor(Math.random() * options1.length)]);
    }
    const [colorp, setColorp] = useState('#ffffff');

    const handleColorChange = (newColor) => {
        setColorp(newColor.hex);
        setColor(newColor.hex); 
        
    };
    
    const onValueChange = (e) => {
        //fetching values from event e that is passed by textfields
        // console.log(e);
        signup.username=selected1+selected2+selected3;
        signup.birthdate=date;
        signup.color=colorp;
        signup.pusername=userData.username;
        signup.securityAnswer=userData.securityAnswer;
        // if([e.target.name]=="username")
        //     e.target.value+=selected1+selected2+selected3;
        setSignup({ ...signup, [e.target.name]: e.target.value });
        // console.log(signup);
    }
    const [details,setDetails] = useState(InitialValues);
    const navigate = useNavigate();
    const saveChanges = async () =>{
        //call for api
        if (signup.username.trim() === '' || signup.password.trim() === ''||signup.color.trim() === ''||signup.birthdate.trim() === '') {
            // Show error message or perform other actions
            alert('Please fill in all fields');
            navigate('/editprofile')
          }
          else{
        let response = await authenticateSignupUpdate(signup);
        if(!response) 
            showError(true);
        else{
            setAccount(signup.username);
            details.color=response.data.user.color;
            details.birthdate=response.data.user.birthdate;
            details.password=response.data.user.password;
            details.phone=response.data.user.phone;
            details.username=response.data.user.username;
            details.securityAnswer=response.data.user.securityAnswer;
            onLogin(details);
            navigate('/profile');
        }
    }
    }

    return (
        
        <MainContainer>
            <Navbar/>
            <EditProfileContainer>
                <UsernameContainer>
                    <Typography style={{fontSize: '17px', margin: '5px 0px 5px 10px'}}>Change Username</Typography>
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
                    <Typography style={{fontSize: '17px', margin: '5px 0px 5px 10px'}}>Change Color</Typography>
                    <ColorContainer>
                        {/* {colors.map((curColor, index) => {
                            return <button key={index} style={{backgroundColor: curColor, padding: '12px', border: 'none', borderRadius: '50%', margin: '2px'}} onClick={() => setColor(curColor)}>{color===curColor ? <FaCheck style={{color: "white", fontSize: '1rem'}}/> : null}</button>
                        })} */}
                        <HuePicker color={color} onChange={handleColorChange} />
                    </ColorContainer>
                </SetColorContainer>
                <SetDateContainer>
                    <Typography style={{fontSize: '16px', margin: '5px 10px 5px 10px'}}>Change Date of Birth</Typography>
                    <DateContainer>
                        <input type="date" style={{fontSize: '15px'}} onChange={e => setDate(e.target.value)} />
                    </DateContainer>
                </SetDateContainer>
                <TextFieldContainer>
                    <Typography style={{fontSize: '16px', margin: '5px 20px 5px 10px'}}>Change Password</Typography>
                    <TextField placeholder="New Password" name='password' onChange={(e) => onValueChange(e)} type="password"  size="small" sx={{border: '1px solid white', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }}/>
                </TextFieldContainer>
                <SaveButton onClick={() => saveChanges()} >Save</SaveButton>
            </EditProfileContainer>
        </MainContainer>
    )
}

export default EditProfile;
