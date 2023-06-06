import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // 导入Redux的Store
import './index.css';
import App from './App';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';


const Report = () => {
  return (
    <Provider store={store}>
    <React.StrictMode>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <App />
      <br></br>
      <br></br>
      <br></br>
      <br></br>        
    </React.StrictMode>
  </Provider>
  )
}

export default Report;

