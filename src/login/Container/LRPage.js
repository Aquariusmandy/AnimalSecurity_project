import React from 'react';
import { useState } from 'react';
import Login_Register from './Login_Register'
import Login_Succeed from './Login_Succeed'
import Register from './Register'
import Register_Succeed from './Register_Succeed'

const LRPage = () => {

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('client');
    const [name, setName] = useState('');
  
    const [LR, setLR] = useState(true);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [RS, setRS] = useState(false);
    
  
    return <>
      {LR?
      <Login_Register setUserID={setUserID} setPassword={setPassword} setLogin={setLogin} setRegister={setRegister} setLR={setLR} />
      :<></>}
      {login?
      <Login_Succeed userID={userID} password={password} setLogin={setLogin} setLR={setLR} />
      :<></>}
      {register?
      <Register setUserID={setUserID} setPassword={setPassword} setRegister={setRegister} setLR={setLR} setName={setName} setRS={setRS} />
      :<></>}
      {RS?
      <Register_Succeed userID={userID} password={password} name={name} setRS={setRS} setLR={setLR} setRegister={setRegister} />
      :<></>}
      
    </>
  }

  export default LRPage;