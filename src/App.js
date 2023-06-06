import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import LRPage from './login/Container/LRPage';
import Report from './report/index';
import Map from './map/map';
import Personpage from './personpage/index';

import Nav from "./homepage/Nav";



const App = () => {
  return (
    <React.StrictMode>
        <Router>
        <Nav />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LRPage} />
            <Route path="/report" component={Report}/>
            <Route path="/get_MapData" component={Map}/>
            <Route path="/person" component={Personpage}/>
        </Switch>
        </Router>
            
    </React.StrictMode>
        
  );
};

export default App;
