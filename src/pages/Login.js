import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const NUMBER_SEVEN = 7;

function Login() {
  const { email, senha, handleEmail, handleSenha } = useContext(LoginContext);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (senha.length >= NUMBER_SEVEN && emailRegex.test(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, senha]);

  function handleClick() {
    const objEmail = {
      email,
    };

    localStorage.setItem('user', JSON.stringify(objEmail));
    history.push('/meals');
  }

  return (
    <div className="meals">
      <label htmlFor="email-input">
        Email:
        <input data-testid="email-input" value={ email } onChange={ handleEmail } />
      </label>
      <label htmlFor="password-input">
        Senha:
        <input data-testid="password-input" value={ senha } onChange={ handleSenha } />
      </label>
      <button
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleClick }
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
