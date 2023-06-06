import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

axios.defaults.withCredentials = true

const Add_Data = ({ userID, password, name, setRegisterStr }) => {

  useEffect(() => {
    axios.post('http://127.0.0.1:5000/signup', {     
      "account": userID,
      "password": password,
      "name": name
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => { 
      console.log(res.data.message)
      setRegisterStr(res.data.message)
    })
    .catch((error) => { console.log(error) })
  },[])

  return(
  <div>
  </div>
  )
}

export default Add_Data
