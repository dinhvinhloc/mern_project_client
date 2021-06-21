import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './components/layouts/MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
