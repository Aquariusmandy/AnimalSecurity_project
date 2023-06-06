import './Container.css'
import { Space, Button } from 'antd'
import { useState } from 'react'
import Login from "../Component/Login";

const Login_Succeed = ( { userID, password, setLogin, setLR } ) => {

    const [loginStr, setLoginStr] = useState('');

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

            <Login userID={userID} password={password} setLoginStr={setLoginStr} />
            <div className='login_register'>
                {loginStr == 'Correct.'?
                <div>
                    <Button onClick={()=>{setLogin(false);}}>登入成功，進入主頁面</Button>
                </div>:
                <div>
                    <Button onClick={()=>{setLogin(false); setLR(true);}}>登入失敗，返回</Button>
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

export default Login_Succeed