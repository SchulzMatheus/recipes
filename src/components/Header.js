import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/reducers/headerSearch';
import SearchBar from './SearchBar';

function Header({ title, haveSearch }) {
  const [searcher, setSearcher] = useState(false);
  // save what people type on input on Context API

  const [searchInput, setSearchInput] = useState('');

  const handleChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(searchInput));
  }, [searchInput, dispatch]);

  return (
    <div>
      <Link to="/profile">
        <img src="../images/profileIcon.svg" data-testid="profile-top-btn" alt="icon" />
      </Link>
      <h1 data-testid="page-title">{title}</h1>
      {haveSearch && (
        <button type="button" onClick={ () => setSearcher(!searcher) }>
          <img src="../images/searchIcon.svg" data-testid="search-top-btn" alt="icon" />
        </button>
      )}
      {searcher && (
        <input
          type="text"
          data-testid="search-input"
          placeholder="Buscar Receita"
          onChange={ handleChange }
        />
      )}
      <SearchBar />
    </div>
  );
}

Header.defaultProps = {
  haveSearch: true,
};

Header.propTypes = {
  title: propTypes.string.isRequired,
  haveSearch: propTypes.bool,
};

export default Header;
