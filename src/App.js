import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginProvider from './context/LoginContext';
import { Drinks, Login, Meals, Profile, FavoriteRecipes, DoneRecipes,
  DrinkPage, MealPage,
} from './pages';

function App() {
  return (
    <LoginProvider>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/meals" exact component={ Meals } />
        <Route path="/drinks" exact component={ Drinks } />
        <Route path="/profile" exact component={ Profile } />
        <Route path="/done-recipes" exact component={ DoneRecipes } />
        <Route path="/favorite-recipes" exact component={ FavoriteRecipes } />
        <Route path="/drinks/:id" exact component={ DrinkPage } />
        <Route path="/meals/:id" exact component={ MealPage } />
      </Switch>
    </LoginProvider>
  );
}

export default App;
