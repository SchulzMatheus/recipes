import React from 'react';
import { useSelector } from 'react-redux';

function RecipesDisplay() {
  const { recipes } = useSelector((state) => state.headerSearch);
  const slice = 12;

  return (
    <div>
      {recipes !== null && recipes.slice(0, slice).map((recipe, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            src={ recipe.strMealThumb || recipe.strDrinkThumb }
            alt={ recipe.strMeal || recipe.strDrink }
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>{recipe.strMeal || recipe.strDrink}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipesDisplay;
