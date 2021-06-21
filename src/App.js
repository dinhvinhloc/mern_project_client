import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainContainer from './components/layouts/MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

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
