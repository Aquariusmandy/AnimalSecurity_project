import './Container.css'
import { Button } from 'antd'
import { useState } from 'react'
import Add_Data from '../Component/Add_Data';
import React from 'react'

const Register_Succeed = ( { userID, password, name, setRS, setLR, setRegister } ) => {

    const [registerStr, setRegisterStr] = useState('')

    const a = userID;

    return (
        <div className='background'>
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

            <Add_Data userID={userID} password={password} name={name} setRegisterStr={setRegisterStr} />
            <div className='login_register'>
                {registerStr == 'Ok'?
                <div className='register_success'>
                    <Button onClick={()=>{setRS(false); }}>Register success. Continue.</Button>
                </div>:
                <div>
                    <Button onClick={()=>{setRS(false); setLR(true);}}>Register failed. Return to login page.</Button>
                    <Button onClick={()=>{setRS(false); setRegister(true);}}>Return to register page.</Button>
                </div>}
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
        </div>
    )

}

export default Register_Succeed