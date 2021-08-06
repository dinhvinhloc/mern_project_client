import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './components/layouts/MainContainer';
import LoginContainer from './components/layouts/LoginContainer';
import RegisterContainer from './components/layouts/RegisterContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './login.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={RegisterContainer} />  
        <Route exact path="/login" component={LoginContainer} />
        <Route exact component={MainContainer} />
      </Switch>
    </div>
  );
}

export default App;
