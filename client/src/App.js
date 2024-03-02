import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
//components
import Home from './Pages/Home/Home';
import DataProvider from './context/DataProvider';
import { Box} from "@mui/material";
import Signup from './Pages/Register/Signup';
import SignupInfo from './Pages/Register/SignupInfo';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import EditProfile from './Pages/Profile/EditProfile';
import PostDetail from './Pages/PostDetail/PostDetail';
import SearchPost from './Pages/SearchPost/SearchPost';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';

const InitialValues = {
  birthdate: '',
  color: '',
  password: '',
  phone: '',
  username: '',
  securityAnswer: ''
};

function App() {
  const [userData, setUserData] = useState(InitialValues);
  
 
  const handleLogin = (user) => {
    
    setUserData(user);
  };
  const handleUpdate = (user) => {
    
    setUserData(user);
    localStorage.setItem('user', JSON.stringify(user));
    fetchData();
  };
  const fetchData = async () => {
    const token = localStorage.getItem('authToken');
  
    try {
      const response = await axios.get('http://localhost:8000/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const storedUser = localStorage.getItem('user');
      try {
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser && typeof parsedUser === 'object') {
            handleLogin(parsedUser);
          } else {
            console.error('Invalid user data in localStorage:', parsedUser);
          }
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        window.location.href = '/login'; // Example navigation
      } else {
        console.error('Request failed', error.response?.data);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <DataProvider>
      
      <BrowserRouter>
          <Box>
            <Routes>
              <Route path= '/' element={<Home userData={userData} />} />
              <Route path= '/signup' element={<Signup />} />
              <Route path= '/signupinfo' element={<SignupInfo onLogin={handleUpdate}/>} />
              <Route path= '/login'  element={<Login onLogin={handleLogin} />}/>
              <Route path= '/profile' element={<Profile userData={userData} />}/>
              <Route path= '/editprofile' element={<EditProfile userData={userData} onLogin={handleUpdate}/>} />
              <Route path= '/postdetail/:id' element={<PostDetail userData={userData}/>} />
              <Route path= '/searchpost' element={<SearchPost />} />
              <Route path= '/forgetpassword' element={<ForgetPassword />} />
              <Route path= '/aboutus' element={<AboutUs />} />
              <Route path= '/contactus' element={<ContactUs />} />
            </Routes>
            
          </Box>
        
      </BrowserRouter>
      
    </DataProvider>
  );
}

export default App;