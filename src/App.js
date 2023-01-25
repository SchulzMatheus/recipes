import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginProvider from './context/LoginContext';
import Login from './pages/Login';
import Recipes from './pages/Recipes';

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/meals" component={ Recipes } />
        </Switch>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
