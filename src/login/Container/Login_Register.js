import { Space, Button, Grid } from 'antd'
import User from '../Component/User'
import './Container.css'

const Login_Register = ( { setUserID, setPassword, setLogin, setRegister, setLR } ) => {

    return (
        <div class = "background" >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='login_register'>Logo</h1>
            
            <div className='login_register'>
                <User setUserID={setUserID} setPassword={setPassword} />
            </div>
            <br></br>
            <br></br>
            <div className='login_register'>
                <Button onClick={()=>{setLR(false); setLogin(true);}} className='login_button'></Button>
            </div>
            <br></br>
            <br></br>
            <div className='login_register'>
                <p>--or--</p>
            </div>
            <div className='login_register'>
                <Button onClick={()=>{setLR(false); setRegister(true);}} className='register_button'></Button>
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

export default Login_Register
/* <div className='login_register'>
                <Grid>
                    <Grid.Item style={{ paddingLeft: 45, paddingRight: 45, width: 300 }}>
                        <Button onClick={()=>{setRole('client');}} size='large' >Client</Button>
                    </Grid.Item>
                    <Grid.Item style={{ paddingLeft: 45, paddingRight: 45, width: 300 }}>
                        <Button onClick={()=>{setRole('staff');}} size='large'>Staff</Button>
                    </Grid.Item>
                </Grid>
            </div> */