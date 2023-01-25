import React from 'react';

function Login() {
  return (
    <div className="meals">
      <label htmlFor="email-input">
        Email:
        <input data-testid="email-input" />
      </label>
      <label htmlFor="password-input">
        Senha:
        <input data-testid="password-input" />
      </label>
      <button data-testid="login-submit-btn">Enter</button>
    </div>
  );
}

export default Login;
