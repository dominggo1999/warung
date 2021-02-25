import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import Button from './Button';

const SignIn = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    if(e.target.id === 'signInEmail') {
      setInputValue({
        ...inputValue,
        email: e.target.value,
      });
    } else {
      setInputValue({
        ...inputValue,
        password: e.target.value,
      });
    }
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSignInSubmit}>
        <FormHeader
          title="I already have an account"
          description="Sign in with your email and password"
        />
        <div className="form-body">
          <FormInput
            label="signInEmail"
            type="email"
            title="email"
            value={inputValue.email}
            handleChange={handleChange}
          />
          <FormInput
            label="signInPassword"
            type="password"
            title="password"
            value={inputValue.password}
            handleChange={handleChange}
          />
        </div>
        <div className="btn-container">
          <Button title="sign in" />
          <Button
            title="sign in with google"
            blue
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
