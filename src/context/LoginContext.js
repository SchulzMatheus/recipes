import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext();

function LoginProvider({ children }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSenha(e) {
    setSenha(e.target.value);
  }

  const value = useMemo(() => ({
    email, setEmail, senha, setSenha, handleEmail, handleSenha,
  }), [email, senha]);

  return (
    <LoginContext.Provider value={ value }>
      { children }
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
