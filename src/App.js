import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainContainer from './components/layouts/MainContainer';


function App() {
  return (
    <div>
      <Switch>
        <Route exact component={MainContainer} />
      </Switch>
    </div>
  );
}

export default App;
