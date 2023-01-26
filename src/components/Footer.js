import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../style/Footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/drinks">
        <img
          src={ drinkIcon }
          alt="Bebida"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="meals">
        <img
          src={ mealIcon }
          alt="Comida"
          data-testid="meals-bottom-btn"
        />
      </Link>
    </footer>
  );
}

export default Footer;
