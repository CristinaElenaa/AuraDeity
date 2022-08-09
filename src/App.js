import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginRegisterPage from './pages/LoginRegister';
import HomePage from './pages/Home';
import UserAccountPage from './pages/UserAccount';
import WeatherPage from './pages/Weather';


function App() {
  return (
    <Switch>
      <Route path='/login' exact>
        <LoginRegisterPage />
      </Route>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/userAccount' exact>
        <UserAccountPage />
      </Route>
      <Route path='/weather' exact>
        <WeatherPage />
      </Route>
    </Switch>
  );
}

export default App;
