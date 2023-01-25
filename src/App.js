import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginProvider from './context/LoginContext';
import Login from './pages/Login';

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
