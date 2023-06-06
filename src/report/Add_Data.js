import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

axios.defaults.withCredentials = true

const Add_Data = ({ t1, t2, t3, t4, t5, t6, t7, t8, t9}) => {

  useEffect(() => {
    axios.post('http://127.0.0.1:5000/report', {     
      "CaseType": t1,
      "AnimalType": t2,
      "Ligation": t3,
      "Hurts": t4,
      "Additional": t5,
      "Publish": t6,
      "Image": t7,
      "Location": [t8, t9],
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => { 
      console.log(res.data)
    })
    .catch((error) => { console.log(error) })
  }, [t1, t2, t3, t4, t5, t6, t7, t8, t9]) // 将 Redux 变量添加到依赖数组中



  return <div></div>;
  
}

const mapStateToProps = (state) => ({
  t1: state.Type, // 从Redux的store中获取Type变量的值
  t2: state.animaltype,
  t3: state.ligation,
  t4: state.hurts,
  t5: state.additional,
  t6: state.Publish,
  t7: state.uploadedImage,
  t8: state.lat,
  t9: state.lon,

});

export default connect(mapStateToProps)(Add_Data);
