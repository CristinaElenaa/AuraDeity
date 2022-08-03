import   './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginRegisterPage from './pages/LoginRegister';
import HomePage from './pages/Home';


function App() {
  return (
      <Switch>
        <Route path='/login' exact>
          <LoginRegisterPage />
        </Route>
        <Route path='/' exact>
          <HomePage />
        </Route>
      </Switch>
  );
}

export default App;
