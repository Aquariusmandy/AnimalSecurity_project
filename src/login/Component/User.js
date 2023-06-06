import 'antd/dist/reset.css';
//import axios from 'axios';
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import { Space } from 'antd';
import './Component.css'

const User = ({ setUserID, setPassword }) => {
    
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
      
      return(
        <div>
          <Input placeholder="Email"
                  onChange={onChangeID} />
          <br></br>
          <br></br>
          <Input.Password placeholder="Password"
                          onChange={onChangePwd} />
        </div>
      );

}

export default User;