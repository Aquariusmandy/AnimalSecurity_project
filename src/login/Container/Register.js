//import axios from 'axios';
import { useState, useEffect } from 'react';
import { Input, Button } from 'antd';

const Register = ({ setUserID, setPassword, setName, setRegister, setLR, setRS }) => {

  const onChangeID = (event) => {
    const value = event.target.value;
    console.log(`selected ${value}`);
    setUserID(value)
  }
  const onChangePwd = (event) => {
    const value = event.target.value;
    console.log(`selected ${value}`);
    setPassword(value)
  }
  const onChangeName = (event) => {
    const value = event.target.value;
    console.log(`selected ${value}`);
    setName(value)
  }

  return (
    <div className='background' >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='login_register'>
          <div>
            <Input placeholder="Account"
                  onChange = {onChangeID} >
            </Input>
            <br></br>
            <br></br>
            <Input placeholder="Password"
                  onChange = {onChangePwd} >
            </Input>
            <br></br>
            <br></br>
            <Input placeholder="Name"
                  onChange = {onChangeName} >
            </Input>
          </div>
        </div>
        <div className='login_register'>
            <Button onClick={()=>{setRegister(false); setRS(true);}}>Finish</Button>
        </div>
        <div className='login_register'>
            <Button onClick={()=>{setRegister(false); setLR(true);}}>Cancel</Button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
)
}

export default Register