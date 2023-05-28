import React, { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Header from './Header';
import Menu from './Menu';
import InputLabel from '@mui/material/InputLabel';
import image from "../images/mars2.jpg";
import "./css/login.css"

import { SERVER_URL } from '../constants.js';

function Login(props) {

  const [message,setMessage] = useState('')
   const [user, setUser] = useState({
    username: '', 
    password: ''
  });
  const [isAuthenticated, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
   


  const handleChange = (event) => {
    setUser({...user, [event.target.name] : event.target.value});
  }
  
  const login = (props) => { 
    fetch(SERVER_URL + 'login', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      const jwtToken = res.headers.get('Authorization');
      if (jwtToken !== null) {
        sessionStorage.setItem("jwt", jwtToken);
        setAuth(true);
      }
      else {
        setOpen(true);
      }
    })
    .catch(err => console.error(err))
  }


  let loginPage = <div style={{ height:"100%", backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize: "cover",  width: '100%'}}>
     <br />
    <br />
    <br />
    <br />
    <Header />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Stack spacing={2} alignItems='center' mt={2}>
    <InputLabel>Username</InputLabel>    
      <TextField 
        sx={{ label: { color: 'yellow' } }}
        name="username"
        label="Username" 
        onChange={handleChange} />
         <InputLabel>Password</InputLabel> 
      <TextField 
      sx={{ label: { color: 'yellow' } }}
        type="password"
        name="password"
        label="Password"
        onChange={handleChange}/>
      <Button 
        variant="outlined" 
        color="primary" 
        onClick={login}>
          Login
      </Button>
    </Stack>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Snackbar 
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      message="Login failed: Check your username and password"
    />
  </div>


  if (isAuthenticated) {
    return (
    <>    
    <Menu />
    </>
    )
  }
  else {  
    return(
      loginPage
    );
  }
}
export default Login;