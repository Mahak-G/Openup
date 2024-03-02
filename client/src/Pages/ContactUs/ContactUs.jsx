import styled from '@emotion/styled';
import {Box, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import Navbar from '../../Component/Navbar/Navbar';
import { useState } from 'react';

const MainContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled(Box)`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
`;

const TextContainer = styled(Box)`
    margin-top: 50px;
`;

const TextFieldContainer = styled(Box)`
    display: flex;
    width: 60%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #161A1D;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const BtnContainer = styled(Box)`
    // margin-left: 30%;
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

const ContactUs = () => {
    const initialFormValues = {
        name: { value: '', placeholder: 'Enter Your Name' },
        email: { value: '', placeholder: 'Enter Your Email' },
        message: { value: '', placeholder: 'Enter Your Message' }
    };
    const [ form, setForm ] = useState(initialFormValues);
    const onValueChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const submitForm = async () => {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbysBheCPXyLTajlTaXvPyRaWr89JSzD5FbRG1f0R8QJ8D_uCRqIwRxRNnf7HFnvmFRP/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(form).toString(),
            });

            if (response.ok) {
                // Form submission successful
                console.log('Form submitted successfully');
                // Optionally, reset the form after successful submission
                setForm(initialFormValues);
            } else {
                // Handle form submission error
                console.error('Form submission failed');
            }
        } catch (error) {
            // Handle network error
            console.error('Error submitting form:', error);
        }
    };

  return (
    <MainContainer>
        <Navbar />
        <TextContainer>
            <Typography style={{fontSize: '40px', marginTop:80}}>Contact Us</Typography>
        </TextContainer>
        <FormContainer>
            <TextFieldContainer>
                <TextField placeholder={form.name.placeholder} value={form.name.value} onChange={(e) => onValueChange(e)} name="name" type="text" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }}/>
            </TextFieldContainer>
            <TextFieldContainer>
                <TextField placeholder={form.email.placeholder} value={form.email.value} onChange={(e) => onValueChange(e)} name="email" type="email" fullWidth size="small" sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }}/>
            </TextFieldContainer>
            <TextFieldContainer>
                <TextField id="outlined-textarea" placeholder={form.message.placeholder} value={form.message.value} onChange={(e) => onValueChange(e)} name="message" type="text" fullWidth size="larger" multiline maxRows={5} sx={{border: 'none', "& fieldset": { border: 'none' }}} InputProps={{ style: { color: 'white' } }}/>
            </TextFieldContainer>
            <BtnContainer>
                <BtnForLogin onClick={submitForm}>Submit</BtnForLogin>
            </BtnContainer>
        </FormContainer>
        <TextContainer>
            <Typography style={{}}>Copyright &copy; 2024</Typography>
        </TextContainer>
    </MainContainer>
  );
};

export default ContactUs;
